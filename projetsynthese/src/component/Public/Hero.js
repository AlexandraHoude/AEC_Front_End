import React, { Component } from 'react';
import Recherche from "./Recherche";
import "./Public.scss";

/**
 * Composant image Hero
 */

class Hero extends Component {
    render() {
        return(
            <div className="Hero-image" >
                <img src="https://picsum.photos/1900/500" alt="randomHero"/>
                <Recherche></Recherche>
            </div>
        )
    }
}

export default Hero;
