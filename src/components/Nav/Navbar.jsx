import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={style.areaBar}>
      <h1 className={style.title}>
        Ficha<span style={{ color: "#ffb612" }}>Fácil</span>
      </h1>
      <div>
        <ul>
          <li className={style.link}>
            <Link className={style.link} to={"/"}>
              Home
            </Link>
          </li>
          <li className={style.link}>
            <Link className={style.link} to={"/Login"}>
              Login
            </Link>
          </li>
          <li className={style.link}>
            <Link className={style.link} to={"/Produtos"}>
              Produtos
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
