import React from 'react';
import {Categorie} from '../Categorie/categorie';

export class Catalogue extends React.Component{
    render() {
        return (
            <>
                <Categorie nom="Suspense"/>
                <Categorie nom="Humour"/>
                <Categorie nom="Séries américaines"/>
                <Categorie></Categorie>
                <Categorie />
                <Categorie />
            </>
        )
    }
}