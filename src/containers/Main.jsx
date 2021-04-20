import React from 'react';
import {Helmet} from 'react-helmet';
import Knowledge from '../components/Knowledge';
import Proyects from '../components/Proyects';
import cv from '../Irving-Vega-Rivas.pdf';
import download from '../images/download.png'
import '../styles/main.css';

const Main = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Irving vega rivas</title>
                <meta name="description" content="Hola soy irving me de dedido al desarrollo de aplicaciones web con react js" />
            </Helmet>

            <div className="hero">
                <div className="hero-title">
                    <h1>Hola soy Irving y soy desarrollador web</h1>
                    <p>Me enfoco en el desarrollo de aplicaciones web y me especializo en el frontend con React js</p>
                </div>
            </div>

            <h1>Conocimientos</h1>
            <Knowledge/>

            <h1>Proyectos</h1>
            <p>Estos son los proyetos que e realizado utilizando mi stack de conocimientos (Puedes ir directamente al proyecto dandole click en el boton de go u dando click en la imagen de la tarjeta a una pequeña descripcion del mismo) </p>
            <Proyects/>
            
            <a className="main-cv" href={cv} download="irving-vega-rivas.pdf">
                <div className="main-cv__container">
                    <p>Descarga mi cv</p>
                    <img src={download} className="main-cv__img" alt="Descargar"/>
                </div>
            </a>
            
        </>
    )
}

export default Main
