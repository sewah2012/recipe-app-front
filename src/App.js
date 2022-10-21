import React, { Component, useEffect, useState } from 'react'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Recipe from './components/recipe/Recipe'
import axios from 'axios'
import { useQuery, useQueryClient } from 'react-query'
import { LinearProgress } from '@mui/material'
// axios.defaults.baseURL = 'http://localhost:8181/api'
axios.defaults.baseURL = 'https://desolate-retreat-02694.herokuapp.com/api'

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
      <div className="app__header">
        <Header />
      </div>
      <div className="app__middle">
        {isLoading ? (
          <LinearProgress />
        ) : (
          <div className="app__recipe--list">
            {data.length === 0 ? (
              <img
                style={{
                  height: '100%',
                  width: '40%',
                  margin: '1rem',
                  opacity: '.5',
                  objectFit: 'contain',
                }}
                src="assets/no-data.png"
                alt="No Recipe available"
              />
            ) : (
              data.map((r, i) => <Recipe key={r.id} recipe={r} />)
            )}
          </div>
        )}
      </div>

      <div className="app__footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
