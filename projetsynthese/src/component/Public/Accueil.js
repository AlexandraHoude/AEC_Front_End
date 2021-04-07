import React, { Component } from 'react';
import Hero from "./Hero";
import NavBar from "./NavBar";
import CarteStage from "./CarteStage";
import CarteStagiaire from "./CarteStagiaire";
import PublicationStage from "./PublicationStage"
import PublicationStage2 from "./PublicationStage2";
import Schema from "./Schema";
import PiedPage from "./PiedPage";
import "./Public.scss";

/**
 * Page d'accueil
 */

class Accueil extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Hero></Hero>
                <CarteStage></CarteStage>
                <PublicationStage></PublicationStage>
                <CarteStagiaire></CarteStagiaire>
                <PublicationStage2></PublicationStage2>
                <Schema></Schema>
                <PiedPage></PiedPage>
            </div>
        );
    }
}

export default Accueil;
