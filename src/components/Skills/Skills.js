import React, { Component } from 'react';
// eslint-disable-next-line
import DraggableImage from '../../js/DraggableImage';
import skills from '../../img/skills.png';
import htmlLogo from '../../img/html.png';
import cssLogo from '../../img/css.png';
import phpLogo from '../../img/php.png';
import laravelLogo from '../../img/laravel.png';
import reactLogo from '../../img/react.png';
import jsLogo from '../../img/js.png';


class Skills extends Component {

    componentDidMount() {
        const imagesLoaded = require('imagesloaded');
        return new Promise((resolve, reject) => {
            imagesLoaded(document.querySelectorAll('.img-drag, .img-trail'), {background: true}, resolve);
        });
    }

    render() {
        return (
            <>
            <div className="content">
                <h2 className="content__title">Dean SMART</h2>
            </div>
            <div className="content">
                <div className="content__drag-area">
                    <div className="img-wrap">
                        <img className="img-trail" src={htmlLogo} alt="HTML Logo"></img>
                        <img className="img-trail" src={cssLogo} alt="CSS Logo"></img>
                        <img className="img-trail" src={phpLogo} alt="php Logo"></img>
                        <img className="img-trail" src={laravelLogo} alt="Laravel Logo"></img>
                        <img className="img-trail" src={reactLogo} alt="React Logo"></img>
                        <img className="img-trail" src={jsLogo} alt="JS Logo"></img>
                        <div className="img-drag" style={{backgroundImage: `url(${skills})`}}></div>
                    </div>
                 </div>
                
            </div>
        </>    
        );
    };
};

export default Skills;