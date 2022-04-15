import React from "react";
import style from "./content.module.css";

const Content = () => {
  return (
    <div className={style.section}>
      <div className={style.principal}>
        <h1>
          Seja <span className={style.span}>Bem vindo</span>
        </h1>
        <div className={style.linha}></div>
        <p className={style.principal} style={{ alignItems: "center" }}>
          Olá é novo por aqui? Relaxa a gente te explica como funciona. Sabe
          quando você está em em dúvida do treino que vai fazer na academia? Ou
          é iniciante e não tem uma ficha de treino para seguir, bom estamos
          aqui para isso, nosso site vai fazer essa ficha para você. BORA!
          Lembrando que para ter um treino adequado você deve procurar um
          educador físico, pois ele fará um treino de acordo com suas
          necessidades, aqui você terá uma média.
        </p>
      </div>
      <div className={style.linha}></div>
      <div classname={style.section}>
        <p className={style.principal}>
          Futuramente mais funções serão adiconadas, como "login" e o "Fale
          conosco", mas por enquanto você já consegue acessar sua ficha!
        </p>
      </div>
    </div>
  );
};
export default Content;
