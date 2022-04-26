import React from "react";
import { Card, Button, Stack } from "@mui/material";
import style from "../ProdutosItens/cards.module.css";
const Cards = () => {
  return (
    <>
      <div className={style.area_Card} style={{ boxSizing: "border-box" }}>
        <div className={style.itensA}>
          <div>
             <Card className={style.card} sx={{ maxWidth: 200 }}>
            card 1
          </Card>
          <Button
            sx={{
              textAlign: "center",
              marginLeft: "70px",
              color: "#ffeb3b",
            }}
          >
            Comprar
          </Button>
          </div>
         
          <div>
            <Card className={style.card} sx={{ maxWidth: 200 }}>
              card 2
            </Card>
            <Button
              sx={{
                textAlign: "center",
                marginLeft: "70px",
                color: "#ffeb3b",
              }}
            >
              Comprar
            </Button>
          </div>
        </div>

        <div className={style.itensA}>
          <div>
            <Card className={style.card} sx={{ maxWidth: 200 }}>
              card 3
            </Card>
            <Button
              sx={{
                textAlign: "center",
                marginLeft: "70px",
                color: "#ffeb3b",
              }}
            >
              Comprar
            </Button>
          </div>

          <div>
            <Card className={style.card} sx={{ maxWidth: 200 }}>
              card 4
            </Card>
            <Button
              sx={{
                textAlign: "center",
                marginLeft: "70px",
                color: "#ffeb3b",
              }}
            >
              Comprar
            </Button>
          </div>
        </div>
        <div className={style.itensA}>
          <div>
            <Card className={style.card} sx={{ maxWidth: 200 }}>
              card 5
            </Card>
            <Button
              sx={{
                textAlign: "center",
                marginLeft: "70px",
                color: "#ffeb3b",
              }}
            >
              Comprar
            </Button>
          </div>

          <div>
            <Card className={style.card} sx={{ maxWidth: 200 }}>
              card 6
            </Card>
            <Button
              sx={{
                textAlign: "center",
                marginLeft: "70px",
                color: "#ffeb3b",
              }}
            >
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
