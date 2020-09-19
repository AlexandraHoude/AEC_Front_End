import React, { useState, useEffect } from "react";
import {API} from "../Constantes";
import { Hero } from "./FicheHero";

function ListeFicheHero() {
    const [donneesRecues, setDonneesRecues] = useState([]);

    //Ajout de la gestion des erreurs
    useEffect(() => {
        getHero();
    }, [donneesRecues.join(",")]); //Si on enlève le second paramètre, on obtient une boucle infinie.

    async function getHero() {
        try {
            const response = await fetch(API);
            const reponseDeApi = await response.json();
            setDonneesRecues(reponseDeApi);
            if (!response.ok) {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h1>Vos Héros</h1>
            {donneesRecues.map((key, i) => (
                <Hero nom={key.nom} id={key._id} key={key.nom + key._id} urlPhoto={key.photo}></Hero>
            ))}
        </div>
    );
}

export default ListeFicheHero;