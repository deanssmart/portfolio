import React, { Component } from 'react';
// eslint-disable-next-line
import DraggableImage from '../../js/DraggableImage';
// eslint-disable-next-line
import DraggableArt from '../../js/DraggableArt';
import art from '../../img/artistIn.png';
import engineer from '../../img/engineerIn.png';
import coder from '../../img/coderIn.png';
import htmlLogo from '../../img/html.png';
import cssLogo from '../../img/css.png';
import phpLogo from '../../img/php.png';
import laravelLogo from '../../img/laravel.png';
import reactLogo from '../../img/react.png';
import jsLogo from '../../img/js.png';
import liam from '../../img/liam.jpg';
import siam from '../../img/siam.png';
import wilson from '../../img/wilson.jpg';
import ronnie from '../../img/ronnie.png';
import oldMan from '../../img/oldMan.jpg';
import her from '../../img/her.png';
import fs from '../../img/fs.png';
import aeroblade from '../../img/aeroblade.png';

class Skills extends Component {


    render() {
        return (
            <>
            {/* <div className="content">
                <h2 className="content__title">Dean SMART</h2>
            </div> */}
            <div className="content">
                <div className="content__drag-area">
                    <div className="img-wrap2">
                        <img className="img-trail2" src={wilson} alt="HTML Logo"></img>
                        <img className="img-trail2" src={siam} alt="CSS Logo"></img>
                        <img className="img-trail2" src={liam} alt="php Logo"></img>
                        <img className="img-trail2" src={ronnie} alt="Laravel Logo"></img>
                        <img className="img-trail2" src={oldMan} alt="React Logo"></img>
                        <img className="img-trail2" src={her} alt="JS Logo"></img>
                        <div className="img-drag2" style={{backgroundImage: `url(${art})`}}></div>
                    </div>
                    <div className="img-wrap2">
                        <img className="img-trail2" src={fs} alt="HTML Logo"></img>
                        <img className="img-trail2" src={aeroblade} alt="CSS Logo"></img>
                        <img className="img-trail2" src={liam} alt="php Logo"></img>
                        <img className="img-trail2" src={liam} alt="Laravel Logo"></img>
                        <img className="img-trail2" src={liam} alt="React Logo"></img>
                        <img className="img-trail2" src={liam} alt="JS Logo"></img>
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