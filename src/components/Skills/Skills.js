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
    constructor(props) {
        super(props);

        this.state = {artText: false,
                      engText: false,
                      devText: false};

        this.handleClickArt = this.handleClickArt.bind(this);
        this.handleClickEng = this.handleClickEng.bind(this);
        this.handleClickDev = this.handleClickDev.bind(this);

    };

    handleClickArt() {
        this.setState({artText: true,
                       engText: false,
                       devText: false});
    }

    handleClickEng() {
        this.setState({artText: false,
                       engText: true,
                       devText: false});
    }

    handleClickDev() {
        this.setState({artText: false,
                       engText: false,
                       devText: true});
    }

    render() {
        const { artText, engText, devText } = this.state;

        return (
            <>          
            <div className="content">
            <Header />
            { artText ? <p>I have a passion for fine art specialsing in oil painting and portraiture</p> : null }
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
                        <div className="img-drag2" style={{backgroundImage: `url(${engineer})`}} onClick={this.handleClickEng}></div>
                    </div>
                    <div className="img-wrap3">
                        <img className="img-trail3" src={htmlLogo} alt="HTML Logo"></img>
                        <img className="img-trail3" src={cssLogo} alt="CSS Logo"></img>
                        <img className="img-trail3" src={phpLogo} alt="php Logo"></img>
                        <img className="img-trail3" src={laravelLogo} alt="Laravel Logo"></img>
                        <img className="img-trail3" src={reactLogo} alt="React Logo"></img>
                        <img className="img-trail3" src={jsLogo} alt="JS Logo"></img>
                        <div className="img-drag3" style={{backgroundImage: `url(${coder})`}} onClick={this.handleClickDev}></div>
                    </div>
                    <p className="no-wrap"><span className="text-highlight">&lt;</span> Click <span className="text-highlight">&amp;</span> Drag</p>                
                 </div>
            </div>
            <p className="vertical">Scroll for Projects <span className="text-highlight">&gt;</span></p>
        </>    
        );
    };
};

export default Skills;