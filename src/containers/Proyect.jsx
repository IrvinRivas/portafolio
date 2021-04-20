import React from 'react';
import { useParams } from 'react-router';
import data from '../proyects.json';

import fancyCloth from '../videos/fancy-cloth.mp4';
import platziConf from '../videos/platzi-conf.mp4';
import rickAndMorty from '../videos/rick-and-morty.mp4';
import crypchat from '../videos/crypchat.mp4'
import freeReader from '../videos/free-reader.mp4'
import Helmet from 'react-helmet';

const Proyect = () => {

    const { proyect } = useParams();
    const currentProyect = data[proyect];
    const videos = [fancyCloth, platziConf, rickAndMorty, crypchat, freeReader]

    return (
        <>
        <Helmet>
            <title>Proyecto: {currentProyect.title}</title>
            <meta name="description" content={currentProyect.description}/>
        </Helmet>
        <div>
            <div className="proyect-hero">
                <h1>{currentProyect.title}</h1>
                {currentProyect.url.length > 0 ?
                    <a href={currentProyect.url}><button className="main-btn">Go!</button></a>
                    :
                    <p>Por el momento este proyecto no esta hosteado</p>
                }
                
            </div>
            <p>{currentProyect.description}</p>
            <video className="proyect-image" src={videos[proyect]} autoPlay muted/>
        </div>
        </>
    )
}

export default Proyect
