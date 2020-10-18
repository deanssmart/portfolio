import React, { Component } from 'react';


class Card extends Component {

    render() {
        const { appName, appImage, appImagePng, appDesc, appLinkCode, appLinkLive } = this.props;
        return (
            <>
                <div className="container">
                    <div className="card">
                        {/* <div className="imgBox"> */}
                            <picture className="imgBox">   
                                <source srcSet={appImage} type="image/webp" />
                                <source srcSet={appImagePng} type="image/png" />
                                <img src={appImage} alt={"screenshot of app homescreen"} />
                            </picture>  
                        {/* </div> */}
                        <div className="contentBox">
                            <h2>{appName}</h2>
                            <div className="description">
                                <p>{appDesc}</p>
                            </div>
                            <div className="links">
                                <a href={appLinkCode}>Code</a>
                                <a href={appLinkLive}>Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default Card;