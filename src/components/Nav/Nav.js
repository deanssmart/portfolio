import React, { Component } from 'react';
import logo from '../../assets/images/logo5.png';

class Nav extends Component {
    constructor(props) {
        super(props);

        this.handleClickHome = this.handleClickHome.bind(this);
        this.handleClickProjects = this.handleClickProjects.bind(this);
        this.handleClickContact = this.handleClickContact.bind(this);

    };

    handleClickHome() {
        window.location.reload(false);
    };

    handleClickProjects(e) {
        e.preventDefault();
        this.props.handleProjects();
    };

    handleClickContact(e) {
        e.preventDefault();
        this.props.handleContact();
    };

    render() {      

        return (
            <nav className="nav">
            <a href="/">
                <img className="logo" src={logo} alt="Dean Smart Logo"></img>
            </a>
            <div className="nav-links">
                <button type="button" onClick={this.handleClickHome}>
                    Home
                </button>
                <span> . </span>
                <button type="button" onClick={this.handleClickProjects}>
                    Projects
                </button>
                <span> . </span>
                <button type="button" onClick={this.handleClickContact}>
                    Contact
                </button>
            </div>

        </nav>
        );
    };
};

export default Nav;