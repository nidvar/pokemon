import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Pokedex from './Pokedex.js';
import Pokegame from './Pokegame.js';

function App() {
  return (
    <div className = 'container'>
      <Pokedex />
    </div>
  );
}

export default App;