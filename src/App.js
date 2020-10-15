import React from 'react';
import './App.css';
// import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Skills from './components/Skills';
import Card from './components/Card/Card';
import frankenstyle from '../src/assets/images/frankenstyle.jpg';
import tourn from '../src/assets/images/tourn.jpg';
import Nav from './components/Nav/Nav';

const App = () => (
<>
  <Nav />
  <Header />
  <Skills /> 
  {/* <p>Click for Projects <span className="text-highlight">&gt;</span></p> */}
  {/* <div className="projects"> */}
  <div className="flex">
 <Card appName="FRANKENSTYLE"
        appImage={frankenstyle}
        appDesc="Interactive four player Pictionary style game where players take it in turns to draw and guess randomized words."
        appLinkCode="https://github.com/deanssmart/frankenstyle"
        appLinkLive="https://deanssmart.github.io/frankenstyle/"
    />
  <Card appName="TOURN"
        appImage={tourn}
        appDesc="Tron(esque) themed app which randomly creates pairings for a tournament bracket from a list of names collected from the user."
        appLinkCode="https://github.com/deanssmart/TOURN"
        appLinkLive="https://deanssmart.github.io/TOURN/"
  />
  </div>
  

  {/* </div> */}

</>
);

export default App;
