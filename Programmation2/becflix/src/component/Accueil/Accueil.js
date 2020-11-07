import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../../img/becflix.png";
import {Catalogue} from "../Catalogue/catalogue";
import React from "react";

 export class Accueil extends React.Component{
     constructor(props) {
         super(props);
         this.state = {Catalogue};
     }


     render() {
        return (
                <Container fluid>
                    <Row>
                        <Col>
                            <img src={logo} alt="BecFlix" width="100px"/>
                        </Col>
                    </Row>
                    {this.state.Catalogue}
                </Container>
       )
     }
 }
