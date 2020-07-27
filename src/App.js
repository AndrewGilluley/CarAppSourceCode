import React from 'react';
import './App.css';

import Home from './pages/Home'
import Cars from './pages/Cars'
import SingleCar from './pages/SingleCar'
import Error from './pages/Error'

import { Route, Switch } from 'react-router-dom'

import NavBar from './components/NavBar';


function App() {
  return (
    <>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cars/" component={Cars} />
      <Route exact path="/cars/:page" component={SingleCar} />
      <Route component={Error} />
    </Switch>

    </>
  );
}

export default App;
