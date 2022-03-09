import React from "react";
import { Emoji } from "./Emoji";
import Pdf from '../assets/resume.pdf';
import { Link } from 'react-scroll';

type AppProps = {
    name: string;
    pp: string;
}

export function Presentation({name,pp}: AppProps){
    return(
    <React.Fragment>
        <div className="Page">
            <div id="wrapperPres">
                <h1>PortFolio {name}</h1>
                <div id="titlePF">
                    <p id="presentationText"> Hello <Emoji symbol='👋' label="shakingHand" className='animatedHand'/><br/> I'm currently a junior web developper full stack in 2nd year at the IMT-Nord-Europe in France <Emoji symbol='💻' label='laptop' className=''/></p>
                </div>
                <div id="contentsTable">
                <h2>Contents</h2>
                    <ul id="contentsList">
                        <li><Link to="Projects" smooth={true} spy={true} duration={100} className="contents">Projects</Link></li>
                        <li><Link to="Technos" smooth={true} spy={true} duration={100} className="contents">Technos I use</Link></li>
                        <li><Link to="AboutMe" smooth={true} spy={true} duration={100} className="contents">About me</Link></li>
                        <li><Link to={Pdf} smooth={true} spy={true} duration={100} className="contents" target="_blank" rel="noreferrer">Resume</Link></li>
                        <li><a href="#contact" className="contents">Contact</a></li>            
                    </ul>
                </div>
            </div>
            <div id="imgWrap">
                <img  id="ppPresentation" src={pp} alt="profil"/>
            </div>
        </div>
    </React.Fragment>
    )
}