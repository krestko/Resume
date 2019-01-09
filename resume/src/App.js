import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Paintings from './pages/Paintings'; 
import Drawings from './pages/Drawings';
import Collage from './pages/Collage';
import Sculpture from './pages/Sculpture';
import Photography from './pages/Photography';
import Bio from './pages/Bio';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path='/' component={HomePage} />
          <Route exact path='/Paintings' component={Paintings} />
          <Route exact path='/Drawings' component={Drawings} />
          <Route exact path='/Collage' component={Collage} />
          <Route exact path='/Sculpture' component={Sculpture} />
          <Route exact path='/Photography' component={Photography} />
          <Route exact path='/Bio' component={Bio} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
