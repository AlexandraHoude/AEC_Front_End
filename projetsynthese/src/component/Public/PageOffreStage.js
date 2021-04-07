import React, { Component } from 'react';
import Hero from "./Hero";
import NavBar from "./NavBar";
import Recherche from "./Recherche";
import CarteStagiaire from "./CarteStagiaire";
import PublicationStage from "./PublicationStage"
import PublicationStage2 from "./PublicationStage2";
import PiedPage from "./PiedPage";
import DetailOffre from "./DetailOffre";
import SecteurActivite from "./SecteurActivite";

/**
 * Page contenant le détail des offres de stage
 */

class PageOffreStage extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Recherche></Recherche>
                <Hero></Hero>
                <div className="row">
                    <div className="offset-1 col-8">
                        <DetailOffre></DetailOffre>
                    </div>
                    <div className="col-3">
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

export default PageOffreStage;
