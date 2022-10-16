import "./header.css";
import React, { useState } from "react";
import AddRecipe from "../AddRecipe/AddRecipe";
import { Button, Modal } from "@mui/material";


const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="header__wrapper">
      <h1>Recipe - App</h1>
      {/* <div className='header__button'>
        <h3>Add Recipe </h3>
        </div> */}
      <Button
        variant="contained"
        onClick={() => {
          setOpen(true);
        }}
        size="medium"
      >
        Add Recipe
      </Button>

      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <AddRecipe />
      </Modal>
    </div>
  );
};

export default Header;
