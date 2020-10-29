import React from 'react';
import github from '../../assets/images/github.svg';
import email from '../../assets/images/email.svg';
import linkedin from '../../assets/images/linkedin.svg';
import cv from '../../assets/images/cv.svg'
import cvPdf from '../../assets/pdf/deanCV.pdf';

const Contact = () => (
    <section className="contact">
        <a href="https://github.com/deanssmart">
            <img className="social" src={github} alt="github logo"></img>
        </a>
        <a href="https://www.linkedin.com/in/deansmart/">
            <img className="social" src={linkedin} alt="linkedin logo"></img>
        </a>
        <a href="mailto:deanssmart@gmail.com">
            <img className="social" src={email} alt="email logo"></img>
        </a>
        <a href={cvPdf}>
            <img className="social" src={cv} alt="cv logo"></img>
        </a>
    </section>

);

export default Contact;