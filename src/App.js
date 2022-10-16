import React, { Component } from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Recipe from './components/recipe/Recipe';

const data = [
  {
      "id": 1,
      "name": "Recipe 1",
      "ingredients": [
          {
              "id": 1,
              "name": "Tomatoes",
              "quantity": "10",
              "recipe": null
          },
          {
              "id": 2,
              "name": "Butter",
              "quantity": "1",
              "recipe": null
          },
          {
              "id": 3,
              "name": "Flour",
              "quantity": "5",
              "recipe": null
          }
      ],
      "imageUrl": "https://media.istockphoto.com/photos/pumpkins-nuts-indian-corn-and-apples-picture-id492068942?s=612x612",
      "description": "This is a test recipe"
  }
]
class App extends Component {
  render() {
    return (
      <div className="App">
         <Header />
         <div className='app__recipe--list'>
            {
              data.map((r,i)=>(
                <Recipe
                key={r.id}
                  recipe={r}
                />
              ))
            }
         </div>
      
        <Footer />
      </div>
    );
  }
}

export default App;
