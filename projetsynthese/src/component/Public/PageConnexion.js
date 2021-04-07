import React, { Component } from 'react';
import Hero from "./Hero";
import NavBar from "./NavBar";
import PiedPage from "./PiedPage";
import Connexion from "./Connexion";
import FormulaireCreationCompte from "./FormulaireCreationCompte"
import BasPageGenerique from "./BasPageGenerique"

/**
 * Page contenant le formulaire de création de compte et de connexion
 */

class PageConnexion extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Hero></Hero>
                <div className="row page-connexion">
                    <Connexion></Connexion>
                    <FormulaireCreationCompte></FormulaireCreationCompte>
                </div>
                <br/>
                <BasPageGenerique></BasPageGenerique>
                <PiedPage></PiedPage>
            </div>
        );
    }
}

export default PageConnexion;
