import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
    return (
        <header>
            <Link to="/">
                <h1>Irvin Vega Rivas</h1>
            </Link>
            <ul>
                <a href="#knowledge">  
                    <li>Conocimientos</li>
                </a>
                <a href="#proyects">
                    <li>Proyectos</li>
                </a>
            </ul>
        </header>
    )
}

export default Header
