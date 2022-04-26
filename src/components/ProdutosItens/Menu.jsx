import React from "react";
import { useState } from "react";
import style from "../ProdutosItens/Menu.module.css";
import { Box, InputLabel, MenuItem, FormControl, Select } from "@mui/material";

const Menu = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <h1 className={style.title}>Categorias</h1>
      <div className={style.linha}></div>
      <Box sx={{ minWidth: 120, marginLeft: '20px' }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Cate</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Celulares</MenuItem>
            <MenuItem value={20}>Notebooks</MenuItem>
            <MenuItem value={30}>Headsets</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
export default Menu;
