import React, { Component } from 'react';
import Hero from "./Hero";
import NavBar from "./NavBar";
import stage from "../../img/stage.png"
import PiedPage from "./PiedPage";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import BasPageGenerique from "./BasPageGenerique";
import "./Public.scss";

/**
 * Page contenant le À Propos
 */

class APropos extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Hero></Hero>
                <div className="row composant-generique-apropos">
                    <div className="col-6">
                        <img src={stage} alt="logo"/>
                    </div>
                    <div className="col-6 texte-generique-apropos">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </div>
                <div className="row composant-carte-apropos">
                    <div className="offset-2 col-10">
                        <CardColumns>
                            <Card className="carte-apropos">
                                <Card.Img variant="top" src="https://picsum.photos/200/300" className="carte-apropos-img" />
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="carte-apropos">
                                <Card.Img variant="top" src="https://picsum.photos/200/300" className="carte-apropos-img" />
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className="carte-apropos">
                                <Card.Img variant="top" src="https://picsum.photos/200/300" className="carte-apropos-img" />
                                <Card.Body>
                                    <Card.Title>Card title that wraps to a new line</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                    </div>
                </div>
                <BasPageGenerique></BasPageGenerique>
                <PiedPage></PiedPage>
            </div>
        );
    }
}

export default APropos;
