import React from 'react';
import git from '../images/git.png';
import linkedIn from '../images/linkedin.png';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer>
            <div>
                <h3>¿Quieres trabajar conmigo?</h3>
                <a href="mailto:irvinvegarivas@gmail.com">Contactame aqui</a>
            </div>
            <a target="_blank" rel="noreferrer" href="https://github.com/IrvinRivas">
                <img className="footer-img footer-github" src={git} alt="github"/>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/irvin-vega-rivas-299b0220b/">
                <img className="footer-img footer-linkedin" src={linkedIn} alt="LinkedIn"/>
            </a>
        </footer>
    )
}

export default Footer
