import React, { Component } from 'react';


class Card extends Component {

    render() {
        const { appName, appImage, appDesc, appLinkCode, appLinkLive } = this.props;
        return (
            <>
                <div className="container">
                    <div className="card">
                        <div className="imgBox">
                            <img src={appImage} alt="screenshot of frankenstyle app"></img>
                        </div>
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