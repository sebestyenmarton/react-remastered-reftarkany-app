import React, { useState, useEffect } from "react";

import axios from "axios";
import { IUser } from "../../../typings/global";
import MyModal from "../modal/my-modal";
import MyInput from "../my-input/my-inut";
import Button from "@mui/joy/Button";
import { IoEnterOutline } from "react-icons/io5";
import urls from "../../../service/ApplicationHttpClient";

import "./login-form.scss";

interface ILoginFormProps {
  onLogin: (user: IUser) => void;
  onClose: () => void;
  isOpen: boolean;
}

const LoginForm: React.FC<ILoginFormProps> = ({ onLogin, onClose, isOpen }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [closeModalStatus, setCloseModalStatus] = useState(false);
  const [successMessage, setSuccessMessage] = useState<null | string>(null);
  const [errorState, setErrorState] = useState({
    message: null,
    status: null,
  });

  interface ILoginResponse {
    status: number;
    token: string;
    message: string;
  }

  const onCloseModal = () => {
    setErrorState({
      message: null,
      status: null,
    });
    setUsername("");
    setPassword("");
  };

  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post<ILoginResponse>(
        `https://${urls.getBaseUrl()}/login.php`,
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
    </MyModal>
  );
};

export default LoginForm;
