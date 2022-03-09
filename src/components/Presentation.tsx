import * as React from "react";
import { Emoji } from "./Emoji";
import Pdf from '../assets/Resume-GuillaumeFAURE-eng.pdf';

type AppProps = {
    name: string;
    pp: string;
}

export function Presentation({name,pp}: AppProps){
    return(
    <React.Fragment>
        <div id="wrapperPres">
            <h1>PortFolio {name}</h1>
            <div id="titlePF">
                <p id="presentationText"> Hello <Emoji symbol='👋' label="shakingHand" className='animatedHand'/><br/> I'm currently a junior web developper full stack in 2nd year at the IMT-Nord-Europe in France <Emoji symbol='💻' label='laptop' className=''/></p>
            </div>
            <div id="contentsTable">
            <h2>Contents</h2>
                <ul id="contentsList">
                    <li><a href="#projects" className="contents">Projects</a></li>
                    <li><a href="#technos" className="contents">Techno I use</a></li>
                    <li><a href="#AboutMe" className="contents">About me</a></li>
                    <li><a href={Pdf} className="contents" target="blank">Resume</a></li>
                    <li><a href="#contact" className="contents">Contact</a></li>            
                </ul>
            </div>
        </div>
        <div id="imgWrap">
            <img  id="ppPresentation" src={pp} alt="profil"/>
        </div>
    </React.Fragment>
    )
}