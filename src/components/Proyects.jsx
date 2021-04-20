import data from '../proyects.json';
import { Link } from 'react-router-dom'
import '../styles/proyects.css';

import fancyCloth from '../images/fancy-store.jpg'
import platziImage from '../images/platzi-conf.jpg';
import wiki from '../images/mini-wiki.jpg';
import crypchat from '../images/crypchat.jpg';
import freeReader from '../images/free-reader.jpg'

const Proyects = () => {
    const images = [fancyCloth, platziImage, wiki, crypchat, freeReader]
    return(
        <>
        <div id="proyects">
            {data.map((proyect, i) => (
                <div className="proyect-item" key={i}>
                    <Link to={"/proyecto/"+i}>
                        <img src={images[i]} className="proyect-img" alt={proyect.title}/>
                    </Link>
                    <div className="project-item__hero">
                        <h3>{proyect.title}</h3>
                        {proyect.url.length > 0 ?
                            <a href={proyect.url} target="_blank" rel="noreferrer">
                                <button className="main-btn">Go</button>
                            </a>
                        :
                        <Link to={"/proyecto/"+i} >
                            <button className="main-btn">View</button>
                        </Link>
                        }
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}

export default Proyects