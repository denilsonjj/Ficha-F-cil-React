import React from "react";
import style from "./End.module.css";
import linha from "../content/content.module.css";
const ContatoDev = () => {
  return (
    <div>
      <p className={style.footerConteud}>Contato do Desenvolvedor</p>
      <div className={linha.linha}></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h4 className={style.redes}>instagram</h4>
        <h4 className={style.redes}>github</h4>
        <h4 className={style.redes}>linkedin</h4>
      </div>
    </div>
  );
};
export default ContatoDev;
