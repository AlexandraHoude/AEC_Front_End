import React, { useState, useEffect } from "react";
import {API} from "../Constantes";
import { Hero } from "./FicheHero";
import { Container, Row} from "react-bootstrap";

export class ListeFicheHero extends React.Component {
    constructor(props) {
        super(props);
        this.state = {donneesRecues: []};

    }


    async componentDidMount(){
        try {
            const response = await fetch(API);
            const reponseDeApi = await response.json();
            this.setState({donneesRecues:reponseDeApi});
            if (!response.ok) {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }


    render()
    {

        return (

            <Container>
                <Row>
                    {this.state.donneesRecues.map((key, i) => (
                        <Hero nom={key.nom} id={key._id} key={key.nom + key._id} urlPhoto={key.photo}></Hero>
                    ))}
                </Row>
            </Container>
        );
    }
}

export default ListeFicheHero;