import React from 'react';
import logo from '../../assets/images/logo5.png';

const Nav = () => (
    <>
        <nav className="nav">
            <a href="/">
                <img className="logo" src={logo} alt="Dean Smart Logo"></img>
            </a>
            <div className="nav-links">
                <a>Home</a>
                <span> . </span>
                <a>Projects</a>
                <span> . </span>
                <a>Contact</a>
            </div>

        </nav>
    </>
);

export default Nav;