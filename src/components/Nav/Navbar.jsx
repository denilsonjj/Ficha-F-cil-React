import React from "react";
import style from "./Nav.module.css";

const NavBar = () => {
  return (
    <div className={style.areaBar}>
      <h1 className={style.title}>
        Ficha<span style={{ color: "#ffb612" }}>Fácil</span>
      </h1>
      <div>
        <ul>
          <li>Home</li>
          <li>Login</li>
          <li>Cadastro</li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
