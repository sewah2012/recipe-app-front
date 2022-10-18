import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const style = {
  boxStyles: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "20rem",
    bgcolor: "background.paper",
    border: ".3rem solid #E2AFDE",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  },
  textfieldStyles: {
    marginBottom: ".5rem",
  },
  previewImageStyle: {
    width: "10rem",
    height: "10rem",
    marginLeft: "1rem",
  },
  actionStyles: {
    display: 'flex',
    justifyContent: 'space-evenly',
    marginTop: '1rem'
  }
};
const AddRecipe = ({handleModalClose}) => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: [],
    description: "",
    imageUrl: "",
  });

  const [ingredient, setIngredient] = useState({
    name: "",
    quantity: "",
  });

  const handleNewRecipeOnChange = (e) => {
    setNewRecipe({
      ...newRecipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleIngredientOnChange = (e) => {
    setIngredient({
      ...ingredient,
      [e.target.name]: e.target.value,
    });
  };
  const handleAddIngredient = () => {
    if (ingredient.name === "" || ingredient.quantity === "") {
      alert("No Ingredient added...");
      return;
    }

    setNewRecipe({
      ...newRecipe,
      ingredients: [...newRecipe.ingredients, ingredient],
    });

    setIngredient({
      name: "",
      quantity: "",
    });
  };

  const handleRemoveIngredient = (i) => {
    setNewRecipe({
        ...newRecipe,
        ingredients: newRecipe.ingredients.filter((item)=>newRecipe.ingredients.indexOf(item)!==i)
        

    })
  };

  const handleReset = ()=>{
    setIngredient({
        name: "",
        quantity: "",
      });

      setNewRecipe({
        name: "",
        ingredients: [],
        description: "",
        imageUrl: "",
      });
  }

  const handleAddRecipe = ()=>{
    // alert("add button clicked")
    handleReset();
    handleModalClose();
  }

  return (
    <div>
      <Box sx={{ ...style.boxStyles, width: 500 }}>
        <Typography
          sx={{ padding: ".5rem" }}
          variant="h4"
          id="parent-modal-title"
        >
          ADD NEW RECIPE
        </Typography>
        <form>
          <TextField
            name="name"
            value={newRecipe.name}
            onChange={handleNewRecipeOnChange}
            label="Recipe Name"
            variant="outlined"
            fullWidth
            sx={{ ...style.textfieldStyles }}
          />

          <TextField
            name="description"
            value={newRecipe.description}
            onChange={handleNewRecipeOnChange}
            label="Recipe Description"
            variant="outlined"
            fullWidth
            multiline
            minRows={6}
            sx={{ ...style.textfieldStyles }}
          />
          <div>
            <Typography variant="h6">Add Ingredient</Typography>
            <TextField
              name="name"
              value={ingredient.name}
              onChange={handleIngredientOnChange}
              label="name"
              variant="outlined"
              // fullWidth
              sx={{
                ...style.textfieldStyles,
                width: "7rem",
                marginRight: ".5rem",
              }}
            />
            <TextField
              name="quantity"
              value={ingredient.quantity}
              onChange={handleIngredientOnChange}
              label="Qty"
              variant="outlined"
              type="text"
              // fullWidth
              sx={{ ...style.textfieldStyles, width: "5rem" }}
            />
            <IconButton onClick={handleAddIngredient}>
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
          </div>
          <div>
            {newRecipe.ingredients.at.apply.length > 0 && (
              <ul>
                {newRecipe.ingredients.map((i, k) => (
                  <li key={k}>
                    {i.name} ------ {i.quantity}{" "}
                    <IconButton onClick={()=>{handleRemoveIngredient(k)}}>
                        <CancelPresentationIcon fontSize="medium" />
                    </IconButton>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <TextField
              name="imageUrl"
              value={newRecipe.imageUrl}
              onChange={handleNewRecipeOnChange}
              label="Recipe Image Link"
              variant="outlined"
              // fullWidth
              type="url"
              sx={{ ...style.textfieldStyles }}
            />

            <img
              style={style.previewImageStyle}
              src={newRecipe.imageUrl !=="" ? newRecipe.imageUrl : "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="}
              alt="recipe-image-preview"
            />
          </div>
          <div style={style.actionStyles}>
            <Button
                onClick={handleReset}
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: " #F991CC",
                "&:hover": {
                  backgroundColor: "#E2AFDE",
                  color: " #fff",
                },
              }}
              
            >
              {" "}
              Reset Form
            </Button>

            <Button
              variant="contained"
              size="medium"
              sx={{
                backgroundColor: " #98A8F8",
                "&:hover": {
                  backgroundColor: "#BCCEF8",
                  color: " #FAF7F0",
                },
              }}
              onClick = {handleAddRecipe}
            >
              {" "}
              Add
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default AddRecipe;
