import React from 'react';
import "../styles/accueil.sass";
import { Container, Row, Col } from "react-bootstrap";
import Batman from '../img/Batman.jpg';
import Aquaman from '../img/Aquaman.jpg';
import Batwoman from '../img/Batwoman.jpg';
import BlackPanther from '../img/BlackPanther.jpg';
import Cyborg from '../img/Cyborg.jpg';
import Daredevil from '../img/Daredevil.jpg';
import Deadman from '../img/Deadman.jpg';
import Deadpool from '../img/Deadpool.jpg';
import Flash from '../img/Flash.jpg';
import GhostRider from '../img/GhostRider.jpg';
import Groot from '../img/Groot.jpg';
import Hulk from '../img/Hulk.jpg';
import Shazam from '../img/Shazam.jpg';
import Spiderman from '../img/Spiderman.jpg';
import Superman from '../img/Superman.jpg';
import Wolverine from '../img/Wolverine.jpg';
import WonderWoman from '../img/WonderWoman.jpg';
import Punisher from '../img/Punisher.jpg';




export function Accueil() {

    return(
        <Container>
            <Row>
                <Col>
                    <img alt="Batman" src={Batman} width={300} />
                    <img alt="Batwoman" src={Batwoman} width={150}/>
                    <img alt="Cyborg" src={Cyborg} width={150}/>
                    <img alt="Deadman" src={Deadman} width={150}/>
                    <img alt="Groot" src={Groot} width={150}/>
                    <img alt="Wolverine" src={Wolverine} width={300}/>
                </Col>
                <Col>
                    <img alt="Aquaman" src={Aquaman} width={150}/>
                    <img alt="BlackPanther" src={BlackPanther} width={150}/>
                    <img alt="Deadpool" src={Deadpool} width={300}/>
                    <img alt="Daredevil" src={Daredevil} width={150}/>
                    <img alt="Flash" src={Flash} width={150}/>
                    <img alt="Shazam" src={Shazam} width={300}/>
                </Col>
                <Col>
                    <img alt="GhostRider" src={GhostRider} width={150}/>
                    <img alt="Spiderman" src={Spiderman} width={150}/>
                    <img alt="Superman" src={Superman} width={300}/>
                    <img alt="Hulk" src={Hulk} width={150}/>
                    <img alt="Wonderwoman" src={WonderWoman} width={150}/>
                    <img alt="Punisher" src={Punisher} width={300}/>
                </Col>
            </Row>
        </Container>

    );
}