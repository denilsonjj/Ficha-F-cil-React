import React from "react";
import NavBar from "../Nav/Navbar";
import style from "../pages/Produto.module.css";
import { Container} from "@mui/material";
import Cards from "../ProdutosItens/Cards";
import Menu from "../ProdutosItens/Menu";
import "../../App.css"

const Produtos = () => {
  return (
    <>
      <NavBar />
        <div style={{display: 'flex'}}>
    <Container sx={{
      width: '200px'
    }}>
        <Menu/>
          </Container>
        <Container
          maxWidth="sm"
          sx={{
            backgroundColor: "#212529",
            display: "flex",
              flexDirection: "column",
          }}
        >
          <h1
            className={style.title}
            style={{
              textAlign: "center",
              
            }}
          >
            Loja
          </h1>
          <Cards />
        </Container>
        </div>
    </>
  );
};
export default Produtos;
