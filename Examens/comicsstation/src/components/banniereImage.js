import React from "react";
import Banniere from "../img/banner.jpg";
import {Container, Row} from "react-bootstrap";
import "../styles/banner.sass"

export function Banner() {

    return(
        <Container>
            <br/>
            <Row>
                <img src={Banniere} alt="Bannière" width={1200} className="Banner" />
            </Row>
            <Row>
                <br/>
                <br/>
                <br/>
            </Row>
        </Container>

    );
}