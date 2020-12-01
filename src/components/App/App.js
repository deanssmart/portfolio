import React from 'react';
import Nav from '../Nav';
import Header from '../Header/Header';
import Skills from '../Skills';
import Card from '../Card/Card';
import gallery from '../../assets/images/gallery.webp';
import galleryPng from '../../assets/images/gallery.png';
import frankenstyle from '../../assets/images/frankenstyle.webp';
import frankenstylePng from '../../assets/images/frankenstyle.png';
import tourn from '../../assets/images/tourn.webp';
import tournPng from '../../assets/images/tourn.png';
import vet from '../../assets/images/vet.webp';
import vetPng from '../../assets/images/vet.png';
import Contact from '../Contact/Contact';


const App = ({ home, projects, contact }) => (
<>
  <Nav />
  <Header />
  { home ? <Skills /> : null }
  { projects ? 
  <>
    <div className="projects">
      <Card appName="THE GALLERY"
            appImage={gallery}
            appImagePng={galleryPng}
            appDesc="An interactive 3D gallery to showcase my art work"
            appLinkCode="https://github.com/deanssmart/the-gallery"
            appLinkLive="https://deanssmart.github.io/the-gallery/"
      />

      <Card appName="TOURN"
            appImage={tourn}
            appImagePng={tournPng}
            appDesc="Tron(esque) themed app which randomly creates pairings for a tournament bracket from user collected data."
            appLinkCode="https://github.com/deanssmart/TOURN"
            appLinkLive="https://deanssmart.github.io/TOURN/"
      />
    </div>
    <div className="projects">
      <Card appName="FRANKENSTYLE"
              appImage={frankenstyle}
              appImagePng={frankenstylePng}
              appDesc="Interactive four player Pictionary style game where players take it in turns to draw and guess randomized words."
              appLinkCode="https://github.com/deanssmart/frankenstyle"
              appLinkLive="https://deanssmart.github.io/frankenstyle/"
          />      

      <Card appName="THE VET PRACTICE"
            appImage={vet}
            appImagePng={vetPng}
            appDesc="A veterinary practice database app that allows tracking of owners, their pets and treatments. Includes a RESTful API"
            appLinkCode="https://github.com/deanssmart/the-vet-practice"
            appLinkLive="http://vet-practice.herokuapp.com/"
      />
    </div>
    <p className="hover-info"><span className="text-highlight">&lt;</span> Hover for Info<span className="text-highlight"> &gt;</span></p> 
  </>
  : null }
  { contact ? <Contact /> : null}
</>
);

export default App;
