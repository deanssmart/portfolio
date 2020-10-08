import React from 'react';
import './App.css';
// import Nav from './components/Nav/Nav';
import Skills from './components/Skills';
import logo from '../src/img/logo.png';

const App = () => (
<>
<img className="logo" src={logo}></img>
  <Skills /> 
</>
);

export default App;
