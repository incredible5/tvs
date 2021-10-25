import React from "react";

import "./style.scss";

function LogoutButton(props) {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className={"logout-btn"} onClick={handleLogout}>
      Logout
    </div>
  );
}

export default LogoutButton;
