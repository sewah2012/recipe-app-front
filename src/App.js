import React, { Component, useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Recipe from './components/recipe/Recipe'
import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { LinearProgress } from '@mui/material'
axios.defaults.baseURL = 'http://localhost:8181/api'

const App = () => {
  const getRecipes = async () => {
    const response = await axios.get('/recipe/getAll')
    return response.data
  }
  //query
  const { data, isLoading, isError } = useQuery('recipes', getRecipes, {
    refetchOnWindowFocus: false,
  })

  return (
    <div className="App">
      <Header />
      <div className="app__middle">
        {isLoading ? (
          <LinearProgress />
        ) : (
          <div className="app__recipe--list">
            {data.map((r, i) => (
              <Recipe key={r.id} recipe={r} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default App
