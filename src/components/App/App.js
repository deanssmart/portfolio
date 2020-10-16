import React from 'react';
import Nav from '../Nav';
import Header from '../Header/Header';
import Skills from '../Skills';
import Card from '../Card/Card';
import frankenstyle from '../../assets/images/frankenstyle.webp';
import tourn from '../../assets/images/tourn.webp';
import Contact from '../Contact/Contact';


const App = ({ home, projects, contact }) => (
<>
  <Nav />
  <Header />
  { home ? <Skills /> : null }
  { projects ? 
  <>
    <div className="projects">
      <Card appName="FRANKENSTYLE"
              appImage={frankenstyle}
              appDesc="Interactive four player Pictionary style game where players take it in turns to draw and guess randomized words."
              appLinkCode="https://github.com/deanssmart/frankenstyle"
              appLinkLive="https://deanssmart.github.io/frankenstyle/"
          />
      
      <Card appName="TOURN"
            appImage={tourn}
            appDesc="Tron(esque) themed app which randomly creates pairings for a tournament bracket from user collected data."
            appLinkCode="https://github.com/deanssmart/TOURN"
            appLinkLive="https://deanssmart.github.io/TOURN/"
      />
    </div>
    <p className="hover-info"><span className="text-highlight">&lt;</span> Hover for Info<span className="text-highlight"> &gt;</span></p> 
  </>
  : null }
  { contact ? <Contact /> : null}
</>
);

export default App;