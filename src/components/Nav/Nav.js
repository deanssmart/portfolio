import React, { Component } from 'react';
import logo from '../../assets/images/logo.svg';


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
        const { home, projects, contact } = this.props;    

        return (
            <nav className="nav">
            <a href="https://deanssmart.github.io/portfolio/">
                <img className="logo" src={logo} alt="Dean Smart Logo"></img>
            </a>
            <div className="nav-links">
                <button 
                    type="button"
                    onClick={this.handleClickHome}
                    className={home ? "active" : ""}
                >
                    Skills
                </button>
                <span> . </span>
                <button 
                    type="button"
                    onClick={this.handleClickProjects}
                    className={projects ? "active" : ""}
                >
                    Projects
                </button>
                <span> . </span>
                <button 
                    type="button"
                    onClick={this.handleClickContact}
                    className={contact ? "active" : ""}
                >
                    Contact
                </button>
            </div>

        </nav>
        );
    };
};

export default Nav;