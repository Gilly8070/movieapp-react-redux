import React, { Component } from 'react';
import MovieResults from './MovieResults';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FavoriteMovieList from './FavoriteMovieList';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row text-center">
          <div className="jumbotron">
            <h1>Movies App</h1>
            <p>Who doesn't Love movies?</p>
          </div>
        </div>
        <div className="row">
          <Router>
            <Switch>
              <Route exact path='/' component={MovieResults} />
              <Route exact path='/fav' component={FavoriteMovieList} />
            </Switch>
          </Router>
          
        </div>
      </div>
    )
  }
}

export default App;