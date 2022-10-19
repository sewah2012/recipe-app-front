import './recipe.css'
import React from 'react'
import ActionButton from '../button/ActionButton'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'

const Recipe = ({ recipe }) => {
  const handleEdit = () => {}

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
    mutate()
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
    </div>
  )
}

export default Recipe
