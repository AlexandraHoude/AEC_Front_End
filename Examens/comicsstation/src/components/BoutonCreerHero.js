import React from "react";
import { Link } from "react-router-dom";

export class BoutonCreerHero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Link to="/CreerHero" className="btn btn-primary mt-5">
                    Créer votre Héro
                </Link>
            </>
        );
    }
}