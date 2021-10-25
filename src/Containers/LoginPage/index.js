import React, { useState } from "react";

import "./style.scss";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const checkLogin = () => {
    if (username === "test" && password === "123456") {
      localStorage.setItem("userData", JSON.stringify({ username, password }));
      window.location.href = "/";
    } else {
      setShowErrorMsg(true);
    }
  };
  return (
    <div className={"login-component"}>
      <div className={"login-container"}>
        <div className={"login-block"}>
          <div className={"title"}>Login</div>
          <div className={"inp-block"}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoComplete="false"
            />
            <input
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="false"
            />
          </div>
          <button className={"submit-btn"} onClick={checkLogin}>
            Submit
          </button>
          {showErrorMsg && (
            <p className={"error-msg"}>Invalid username or password!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
