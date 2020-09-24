import React, { useState, useEffect } from "react";
import { API } from "../Constantes";
import { Hero } from "./FicheHero";
import { Container, Row } from "react-bootstrap";

export function ListeFicheHero (props) {
    const [donneesRecues,setdonneesRecues] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(API);
                const reponseDeApi = await response.json();
                setdonneesRecues(reponseDeApi);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])

    return (
        <Container>
            <Row>
                {donneesRecues.map((key, i) => (
                    <Hero
                        nom={key.nom}
                        id={key._id}
                        key={key.nom + key._id}
                        pouvoir={key.pouvoir}
                        urlPhoto={key.urlPhoto}
                        history={props.history}>
                    </Hero>
                ))}
            </Row>
        </Container>
    );
}
