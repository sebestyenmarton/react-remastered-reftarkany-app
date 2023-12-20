import React, { useState } from "react";
import axios from "axios";
import { LoginFormProps, User } from "../../../typings/global";

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onClose }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  interface LoginResponse {
    token: string;
    // Other properties if any
  }

  const handleLogin = async () => {
    try {
      // Perform authentication logic (e.g., API call) and get user data
      const response = await axios.post<LoginResponse>("/refapi/login.php", {
        username,
        password,
      });

      // Extract the token from the response
      const { token } = response.data;

      // Call onLogin with the logged-in user or token
      onLogin({ id: 1, username: "exampleUser", token }); // Update with actual user data
    } catch (error) {
      // Handle authentication error (e.g., display error message)
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login-form">
      {/* Your login form JSX here */}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default LoginForm;
