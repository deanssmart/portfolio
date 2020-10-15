import React from 'react';
import logo from '../../assets/images/logo5.png';

const Nav = () => (
    <>
        <nav className="nav">
            <a href="/">
                <img className="logo" src={logo} alt="Dean Smart Logo"></img>
            </a>
            <div className="nav-links">
                <button>Home</button>
                <span> . </span>
                <button>Projects</button>
                <span> . </span>
                <button>Contact</button>
            </div>

        </nav>
    </>
);

export default Nav;