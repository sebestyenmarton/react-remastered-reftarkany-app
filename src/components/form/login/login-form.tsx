import React, { useState, useEffect } from "react";
import axios from "axios";
import urls from "../../../service/ApplicationHttpClient";
import { IUser } from "../../../typings/global";
import MyModal from "../modal/my-modal";
import MyInput from "../my-input/my-inut";
import Button from "@mui/joy/Button";
import { IoEnterOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";
import "./login-form.scss";

interface ILoginFormProps {
  onLogin: (user: IUser) => void;
  onClose: () => void;
  isOpen: boolean;
  loggedIn: boolean;
  loggedUser: string;
}

const LoginForm: React.FC<ILoginFormProps> = ({
  onLogin,
  onClose,
  isOpen,
  loggedIn,
  loggedUser,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [closeModalStatus, setCloseModalStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState<null | string>(null);
  const [errorState, setErrorState] = useState({
    message: null,
    status: null,
  });

  const onCloseModal = () => {
    setErrorState({
      message: null,
      status: null,
    });
    setUsername("");
    setPassword("");
  };

  const handleLogin = async () => {
    const baseUrl =
      process.env.NODE_ENV === "production"
        ? urls.getRootUrl()
        : urls.getBaseUrl();

    try {
      const loginResponse = await axios.post(
        `${baseUrl}/login.php`,
        {
          username,
          password,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { token } = loginResponse.data;
      setSuccessMessage(loginResponse.data.message);

      setCloseModalStatus(true);
      setTimeout(() => {
        setCloseModalStatus(false);
      }, 3000);
      onCloseModal();

      onLogin({ username, token }); // Update with actual user data
    } catch (error: any) {
      setErrorState({
        message: error.response?.data?.error
          ? error.response.data.error
          : "Sikertelen bejelentkezés!",
        status: error.response?.status ? error.response.status : null,
      });
    }
  };

  const onLogout = () => {
    axios.defaults.headers.common["Authorization"] = null;
    onLogin({ username: "", token: "" });
  };

  useEffect(() => {
    setErrorState({
      message: null,
      status: null,
    });
  }, [username, password]);

  return (
    <MyModal
      title="Ref-Tárkány Fiók"
      isOpen={isOpen}
      onClose={() => {
        onCloseModal();
        onClose();
      }}
    >
      {loggedIn ? (
        <>
          <div className="user-welcome">
            Üdv, <b>&nbsp;{loggedUser}&nbsp;</b>!
          </div>
          <div className="submit-button">
            <Button
              onClick={onLogout}
              size="lg"
              color="danger"
              startDecorator={<ImExit />}
            >
              Kijelentkezés
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="inputs">
            <MyInput
              name="username"
              label="Felhasználónév"
              placeholder="Pl. KerekesiTibor34@"
              type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <MyInput
              name="password"
              label="Jelszó"
              placeholder="Pl. 2~34jv+b24@32sdv"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="submit-button">
            {errorState?.status && (
              <div className="error-message">{errorState.message}</div>
            )}
            {closeModalStatus ? (
              successMessage && (
                <div className="success-message">{successMessage}</div>
              )
            ) : (
              <Button
                onClick={handleLogin}
                size="lg"
                startDecorator={<IoEnterOutline />}
              >
                Bejelentkezés
              </Button>
            )}
          </div>
        </>
      )}
    </MyModal>
  );
};

export default LoginForm;
