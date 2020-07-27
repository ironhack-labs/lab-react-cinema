import React, { Component } from 'react';
import Home from './components/Home';
import {Switch,Route} from 'react-router-dom';
import Movies from './components/movies.js'
import MovieDetail from './components/moviedetails'
import NewMovie from './components/newmovie.js'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route exact path='/' render={()=><Home/>}/>
          <Route exact path='/movies' render={()=><Movies/>}/>
          <Route exact path = '/movie/:id' render = {(props)=><MovieDetail {...props}/>}/>
          <Route exact path='/newmovie' render={()=><NewMovie/>}/>
        </Switch>
       
      </div>
    );
  }
}

export default App;
