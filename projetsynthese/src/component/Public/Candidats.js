import React, { Component } from 'react';
import Hero from "./Hero";
import NavBar from "./NavBar";
import Recherche from "./Recherche";
import CarteStagiaire from "./CarteStagiaire";
import PublicationStage from "./PublicationStage"
import PublicationStage2 from "./PublicationStage2";
import PiedPage from "./PiedPage";
import CarteCandidats from "./CarteCandidats";
import SecteurActivite from "./SecteurActivite";

/**
 * Page contenant la recherche de candidats pour un stage
 */

class Candidats extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Recherche></Recherche>
                <Hero></Hero>
                <div className="row">
                    <div className="col-8">
                        <CarteCandidats></CarteCandidats>
                    </div>
                    <div className="col-4">
                        <SecteurActivite></SecteurActivite>
                    </div>
                </div>
                <PublicationStage></PublicationStage>
                <CarteStagiaire></CarteStagiaire>
                <PublicationStage2></PublicationStage2>
                <div>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <PiedPage></PiedPage>
            </div>
        );
    }
}

export default Candidats;
