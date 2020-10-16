import React, { Component } from 'react';
// eslint-disable-next-line
import DraggableArt from '../../js/DraggableArt';
// eslint-disable-next-line
import DraggableEng from '../../js/DraggableEng';
// eslint-disable-next-line
import DraggableDev from '../../js/DraggableDev';
import art from '../../assets/images/artist.svg';
import engineer from '../../assets/images/engineer.svg';
import coder from '../../assets/images/coder.svg';
import htmlLogo from '../../assets/images/html.webp';
import cssLogo from '../../assets/images/css.webp';
import phpLogo from '../../assets/images/php.webp';
import laravelLogo from '../../assets/images/laravel.webp';
import reactLogo from '../../assets/images/react.webp';
import jsLogo from '../../assets/images/js.webp';
import liam from '../../assets/images/liam.webp';
import siam from '../../assets/images/siam.webp';
import wilson from '../../assets/images/wilson.webp';
import ronnie from '../../assets/images/ronnie.webp';
import oldMan from '../../assets/images/oldMan.webp';
import her from '../../assets/images/her.webp';
import fs from '../../assets/images/fs.webp';
import aeroblade from '../../assets/images/aeroblade.webp';
import patent from '../../assets/images/patent.webp';
import dyson from '../../assets/images/dyson.webp';
import db11 from '../../assets/images/db11.webp';
import damper from '../../assets/images/damper.webp';

class Skills extends Component {

     render() {

        return (
            <>          
            <div className="content">
                <div className="content__drag-area">
                    <span className="spacer"></span>
                    <div className="img-wrap">
                        <img className="img-trail" src={wilson} alt="colour drawing of a dog"></img>
                        <img className="img-trail" src={siam} alt="painting of a wedding with aeroplanes"></img>
                        <img className="img-trail" src={liam} alt="greyscale painting of bearded man"></img>
                        <img className="img-trail" src={ronnie} alt="digital colour drawing of body builder"></img>
                        <img className="img-trail" src={oldMan} alt="colour painting of old mans face"></img>
                        <img className="img-trail" src={her} alt="colour painting of ladies face"></img>
                        <div className="img-drag" style={{backgroundImage: `url(${art})`}}></div>
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
                    <div className="img-wrap3">
                        <img className="img-trail3" src={htmlLogo} alt="HTML Logo"></img>
                        <img className="img-trail3" src={cssLogo} alt="CSS Logo"></img>
                        <img className="img-trail3" src={phpLogo} alt="php Logo"></img>
                        <img className="img-trail3" src={laravelLogo} alt="Laravel Logo"></img>
                        <img className="img-trail3" src={reactLogo} alt="React Logo"></img>
                        <img className="img-trail3" src={jsLogo} alt="JS Logo"></img>
                        <div className="img-drag3" style={{backgroundImage: `url(${coder})`}}></div>
                    </div>
                    <p className="click-drag"><span className="text-highlight">^</span> Click <span className="text-highlight">&amp;</span> Drag</p>                
                 </div>
            </div>
        </>    
        );
    };
};

export default Skills;