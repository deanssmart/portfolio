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
import htmlLogoPng from '../../assets/images/html.png';
import cssLogo from '../../assets/images/css.webp';
import cssLogoPng from '../../assets/images/css.png';
import phpLogo from '../../assets/images/php.webp';
import phpLogoPng from '../../assets/images/php.png';
import laravelLogo from '../../assets/images/laravel.webp';
import laravelLogoPng from '../../assets/images/laravel.png';
import reactLogo from '../../assets/images/react.webp';
import reactLogoPng from '../../assets/images/react.png';
import jsLogo from '../../assets/images/js.webp';
import jsLogoPng from '../../assets/images/js.png';
import liam from '../../assets/images/liam.webp';
import liamPng from '../../assets/images/liam.png';
import siam from '../../assets/images/siam.webp';
import siamPng from '../../assets/images/siam.png';
import wilson from '../../assets/images/wilson.webp';
import wilsonPng from '../../assets/images/wilson.png';
import ronnie from '../../assets/images/ronnie.webp';
import ronniePng from '../../assets/images/ronnie.png';
import oldMan from '../../assets/images/oldMan.webp';
import oldManPng from '../../assets/images/oldMan.png';
import her from '../../assets/images/her.webp';
import herPng from '../../assets/images/her.png';
import fs from '../../assets/images/fs.webp';
import fsPng from '../../assets/images/fs.png';
import aeroblade from '../../assets/images/aeroblade.webp';
import aerobladePng from '../../assets/images/aeroblade.png';
import patent from '../../assets/images/patent.webp';
import patentPng from '../../assets/images/patent.png';
import dyson from '../../assets/images/dyson.webp';
import dysonPng from '../../assets/images/dyson.png';
import db11 from '../../assets/images/db11.webp';
import db11Png from '../../assets/images/db11.png';
import damper from '../../assets/images/damper.webp';
import damperPng from '../../assets/images/damper.png';

class Skills extends Component {

     render() {

        return (
            <>          
            <div className="content">
                <div className="content__drag-area">
                    <span className="spacer"></span>
                    <div className="img-wrap3">
                        <picture className="img-trail3">   
                            <source srcSet={htmlLogo} type="image/webp" />
                            <source srcSet={htmlLogoPng} type="image/png" />
                            <img src={htmlLogoPng} alt="HTML Logo" />
                        </picture> 
                        <picture className="img-trail3">   
                            <source srcSet={cssLogo} type="image/webp" />
                            <source srcSet={cssLogoPng} type="image/png" />
                            <img src={cssLogoPng} alt="CSS Logo" />
                        </picture> 
                        <picture className="img-trail3">   
                            <source srcSet={phpLogo} type="image/webp" />
                            <source srcSet={phpLogoPng} type="image/png" />
                            <img src={phpLogo} alt="php Logo" />
                        </picture> 
                        <picture className="img-trail3">   
                            <source srcSet={laravelLogo} type="image/webp" />
                            <source srcSet={laravelLogoPng} type="image/png" />
                            <img src={laravelLogo} alt="Laravel Logo" />
                        </picture> 
                        <picture className="img-trail3">   
                            <source srcSet={reactLogo} type="image/webp" />
                            <source srcSet={reactLogoPng} type="image/png" />
                            <img src={reactLogo} alt="React Logo" />
                        </picture> 
                        <picture className="img-trail3">   
                            <source srcSet={jsLogo} type="image/webp" />
                            <source srcSet={jsLogoPng} type="image/png" />
                            <img src={jsLogo} alt="JS Logo" />
                        </picture> 
                        <div className="img-drag3" style={{backgroundImage: `url(${coder})`}}></div>
                    </div>                    
                    <div className="img-wrap2">
                        <picture className="img-trail2">   
                            <source srcSet={fs} type="image/webp" />
                            <source srcSet={fsPng} type="image/png" />
                            <img src={fs} alt="formula student racecar" />
                        </picture> 
                        <picture className="img-trail2">   
                            <source srcSet={aeroblade} type="image/webp" />
                            <source srcSet={aerobladePng} type="image/png" />
                            <img src={aeroblade} alt="aston martin deployable spoiler close up" />
                        </picture> 
                        <picture className="img-trail2">   
                            <source srcSet={patent} type="image/webp" />
                            <source srcSet={patentPng} type="image/png" />
                            <img src={patent} alt="active aerodynamic patent" />
                        </picture> 
                        <picture className="img-trail2">   
                            <source srcSet={db11} type="image/webp" />
                            <source srcSet={db11Png} type="image/png" />
                            <img src={db11} alt="aston martin db11" />
                        </picture>
                        <picture className="img-trail2">   
                            <source srcSet={dyson} type="image/webp" />
                            <source srcSet={dysonPng} type="image/png" />
                            <img src={dyson} alt="dyson electric vehicle concept" />
                        </picture>  
                        <picture className="img-trail2">   
                            <source srcSet={damper} type="image/webp" />
                            <source srcSet={damperPng} type="image/png" />
                            <img src={damper} alt="screenshot of formula student adjustable damper program" />
                        </picture>  
                        <div className="img-drag2" style={{backgroundImage: `url(${engineer})`}}></div>
                    </div>
                    <div className="img-wrap">
                        <picture className="img-trail">   
                            <source srcSet={wilson} type="image/webp" />
                            <source srcSet={wilsonPng} type="image/png" />
                            <img src={wilson} alt="colour drawing of a dog" />
                        </picture>  
                        <picture className="img-trail">   
                            <source srcSet={siam} type="image/webp" />
                            <source srcSet={siamPng} type="image/png" />
                            <img src={siam} alt="painting of a wedding with aeroplanes" />
                        </picture>  
                        <picture className="img-trail">   
                            <source srcSet={liam} type="image/webp" />
                            <source srcSet={liamPng} type="image/png" />
                            <img src={liam} alt="greyscale painting of bearded man" />
                        </picture>  
                        <picture className="img-trail">   
                            <source srcSet={ronnie} type="image/webp" />
                            <source srcSet={ronniePng} type="image/png" />
                            <img src={ronnie} alt="digital colour drawing of body builder" />
                        </picture>  
                        <picture className="img-trail">   
                            <source srcSet={oldMan} type="image/webp" />
                            <source srcSet={oldManPng} type="image/png" />
                            <img src={oldMan} alt="colour painting of old mans face" />
                        </picture>  
                        <picture className="img-trail">   
                            <source srcSet={her} type="image/webp" />
                            <source srcSet={herPng} type="image/png" />
                            <img src={her} alt="colour painting of ladies face" />
                        </picture>  
                        <div className="img-drag" style={{backgroundImage: `url(${art})`}}></div>
                    </div>
                    <p className="click-drag"><span className="text-highlight">^</span> Click <span className="text-highlight">&amp;</span> Drag</p>                
                 </div>

            </div>
        </>    
        );
    };
};

export default Skills;