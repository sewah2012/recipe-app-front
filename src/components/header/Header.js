import './header.css'
import React, { useState } from 'react'
import AddRecipe from '../AddRecipe/AddRecipe'
import { Button, Modal } from '@mui/material'

const Header = () => {
  const [open, setOpen] = useState(false)

  const handleModalOpen = () => {
    setOpen(true)
  }

  const handleModalClose = () => {
    setOpen(false)
  }
  return (
    <div className="header__wrapper">
      <h1>Recipe - App</h1>
      {/* <div className='header__button'>
        <h3>Add Recipe </h3>
        </div> */}
      <Button
        sx={{
          backgroundColor: '#DD5353',
          '&:hover': { backgroundColor: '#DD5353' },
        }}
        variant="contained"
        onClick={handleModalOpen}
        size="medium"
      >
        Add Recipe
      </Button>

      <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <AddRecipe handleModalClose={handleModalClose} />
      </Modal>
    </div>
  )
}

export default Header
