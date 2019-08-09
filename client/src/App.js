import React from 'react';
import axios from 'axios';
import RecipeCard from './components/RecipeCard';
import FormikLoginForm from './components/Form';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      recipeData: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/restricted/data')
      .then(results => {
        console.log(results.data);

        this.setState({recipeData: results.data})
      })
      .catch(err => {
        console.log('server error', err);
      })
  }

  render() {
    return (
      <div className="App">
        <FormikLoginForm />
        <RecipeCard recipes={this.state.recipeData} />
      </div>
    );
  }
}

export default App;
