import React from 'react';
import "./Public.scss";
/**
 * Barre de recherche
 */

const Recherche = ({keyword,setKeyword}) => {
    const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
    return (
        <input
            style={BarStyling}
            key="random1"
            value={keyword}
            placeholder={"Rechercher un stage"}
            onChange={(e) => setKeyword(e.target.value)}
            className="Recherche"
        />
    );
}

export default Recherche
