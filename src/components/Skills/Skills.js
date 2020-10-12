import React, { Component } from 'react';
// eslint-disable-next-line
import DraggableImage from '../../js/DraggableImage';
// eslint-disable-next-line
import DraggableArt from '../../js/DraggableArt';
import art from '../../assets/images/artistInYellow.svg';
import engineer from '../../assets/images/engineerIn.png';
import coder from '../../assets/images/coderIn.png';
import htmlLogo from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.png';
import phpLogo from '../../assets/images/php.png';
import laravelLogo from '../../assets/images/laravel.png';
import reactLogo from '../../assets/images/react.png';
import jsLogo from '../../assets/images/js.png';
import liam from '../../assets/images/liam.jpg';
import siam from '../../assets/images/siam.png';
import wilson from '../../assets/images/wilson.jpg';
import ronnie from '../../assets/images/ronnie.png';
import oldMan from '../../assets/images/oldMan.jpg';
import her from '../../assets/images/her.png';
import fs from '../../assets/images/fs.png';
import aeroblade from '../../assets/images/aeroblade.png';
import patent from '../../assets/images/patent.png';
import dyson from '../../assets/images/dyson.png';
import db11 from '../../assets/images/db11.png';
import damper from '../../assets/images/damper.png';
import Header from '../Header/Header';

class Skills extends Component {


    render() {
        return (
            <>
            {/* <div className="content">
                <h2 className="content__title">Dean SMART</h2>
            </div> */}
            
            <div className="content">
            <Header />
                <div className="content__drag-area">
                    <div className="img-wrap2">
                        <img className="img-trail2" src={wilson} alt="colour drawing of a dog"></img>
                        <img className="img-trail2" src={siam} alt="painting of a wedding with aeroplanes"></img>
                        <img className="img-trail2" src={liam} alt="greyscale painting of bearded man"></img>
                        <img className="img-trail2" src={ronnie} alt="digital colour drawing of body builder"></img>
                        <img className="img-trail2" src={oldMan} alt="colour painting of old mans face"></img>
                        <img className="img-trail2" src={her} alt="colour painting of ladies face"></img>
                        <div className="img-drag2" style={{backgroundImage: `url(${art})`}}></div>
                    </div>
                    <div className="img-wrap2">
                        <img className="img-trail2" src={fs} alt="formula student racecar"></img>
                        <img className="img-trail2" src={aeroblade} alt="aston martin deployable spoiler close up"></img>
                        <img className="img-trail2" src={patent} alt="active aerodynamic patent"></img>
                        <img className="img-trail2" src={db11} alt="aston martin db11"></img>
                        <img className="img-trail2" src={dyson} alt="dyson electric vehicle concept"></img>
                        <img className="img-trail2" src={damper} alt="screenshot of formula student adjustable damper program"></img>
                        <div className="img-drag2" style={{backgroundImage: `url(${engineer})`}}></div>
                    </div>
                    <div className="img-wrap">
                        <img className="img-trail" src={htmlLogo} alt="HTML Logo"></img>
                        <img className="img-trail" src={cssLogo} alt="CSS Logo"></img>
                        <img className="img-trail" src={phpLogo} alt="php Logo"></img>
                        <img className="img-trail" src={laravelLogo} alt="Laravel Logo"></img>
                        <img className="img-trail" src={reactLogo} alt="React Logo"></img>
                        <img className="img-trail" src={jsLogo} alt="JS Logo"></img>
                        <div className="img-drag" style={{backgroundImage: `url(${coder})`}}></div>
                    </div>
                 </div>
            </div>
        </>    
        );
    };
};

export default Skills;