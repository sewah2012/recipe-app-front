import './recipe.css'
import React, { useState } from 'react'
import ActionButton from '../button/ActionButton'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
} from '@mui/material'
import UpdateRecipe from '../UpdateRecipe/UpdateRecipe'

const Recipe = ({ recipe }) => {
  const [open, setOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const handleModalClose = () => {
    setOpenModal(false)
  }

  const handleEdit = () => {
    setOpenModal(true)
  }

  const queryClient = useQueryClient()

  const deleteRecipe = async () => {
    const { data } = await axios.delete(`/recipe/delete/${recipe.id}`)
    return data
  }

  const { mutate, isLoading, isError } = useMutation(deleteRecipe, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['recipes'])
      // console.log(data)
    },
  })

  const handleDelete = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleConfirm = () => {
    mutate()
    setOpen(false)
  }

  return (
    <div className="recipe__wrapper">
      <img src={recipe.imageUrl} alt="recipe-image" />
      <div className="recipe__details">
        <h2>{recipe.name}</h2>
        <p>{recipe.description}</p>

        <div className="recipe__ingredients">
          <div className="recipe__ingredients--ingredient">
            <table border={2} cellPadding={2} cellSpacing={2}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {recipe.ingredients.map((ing, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{ing.name}</td>
                    <td>{ing.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="recipe__action">
          <ActionButton
            onClickAction={handleEdit}
            color="green"
            text={'Edit'}
          />
          <ActionButton
            onClickAction={handleDelete}
            color="red"
            text={'Delete'}
          />
        </div>
      </div>

      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{'Delete Recipe'}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you sure you want to delete this recipe. Note: This action is
              irreversible.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>No, Cancel</Button>
            <Button onClick={handleConfirm} autoFocus>
              Yes, Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Modal
        // sx={{ position: 'relative' }}
        open={openModal}
        onClose={handleModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <UpdateRecipe recipe={recipe} handleModalClose={handleModalClose} />
      </Modal>
    </div>
  )
}

export default Recipe
