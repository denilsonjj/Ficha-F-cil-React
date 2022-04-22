import React from "react";
import NavBar from "../Nav/Navbar";
import style from "./Login.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const Login = () => {
  return (
    <>
      <NavBar />
      <div className={style.content}>
        <div className={style.container1}>
          <h1 className={style.title}>
            Ficha
            <span style={{ color: "#ffb612" }}>Fácil</span>
          </h1>
          <h3 className={style.principal}>Bem-vindo de volta!</h3>
          <p>Acesse sua Conta agora.</p>
          <input type={"button"} value={"ENTRAR"} className={style.button} />
          <p className={style.forget}>Esqueceu sua senha?</p>
        </div>
        <div className={style.container2}>
          <h3 className={style.principal2}>
            Crie su
            <span style={{ color: "#ffb612" }}>a conta</span>
          </h3>
          <p style={{ color: "gray" }}>Preencha seus dados</p>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <div>
              <>
                <AiOutlineUser className={style.icons} />
                <input
                  className={style.input_form}
                  type="text"
                  placeholder="Nome"
                />
              </>
              <div>
                <AiOutlineMail className={style.icons} />
                <input
                  className={style.input_form}
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <RiLockPasswordLine className={style.icons} />
                <input
                  className={style.input_form}
                  type="password"
                  placeholder="Senha"
                />
              </div>
              <input type="submit" value="Enviar" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
