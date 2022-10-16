import React, { useState } from "react";
import {
  Backdrop,
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
};
const AddRecipe = () => {
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: [],
    description: "",
    imageUrl: "",
  });
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
            label="Recipe Name"
            variant="outlined"
            fullWidth
            sx={{ ...style.textfieldStyles }}
          />

          <TextField
            name="description"
            value={newRecipe.description}
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
              // value={newRecipe.description}
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
              // value={newRecipe.description}
              label="Qty"
              variant="outlined"
              type='number'
              // fullWidth
              sx={{ ...style.textfieldStyles, width: "5rem" }}
            />
            <IconButton>
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
          </div>

          <div 
            style={{display:'flex', alignItems:'center'}}
          >
            <TextField
              name="imageUrl"
              value={newRecipe.imageUrl}
              label="Recipe Image Link"
              variant="outlined"
              // fullWidth
              type="url"
              sx={{ ...style.textfieldStyles }}
            />

            <img
              style={style.previewImageStyle}
              src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
              alt="recipe-image-preview"
            />
          </div>
        </form>
      </Box>
    </div>
  );
};

export default AddRecipe;
