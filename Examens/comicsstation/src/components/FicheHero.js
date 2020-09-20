import React from "react";
import { Link } from "react-router-dom";
import {Card} from "react-bootstrap"

export class Hero extends React.Component {


    render() {
        return (
            <>
                <Card>
                    <Card.Body>
                        <Link to={"hero/" + this.props.nom + "?id=" + this.props.id}>
                            <h1>nom : {this.props.nom}</h1>
                        </Link>
                    </Card.Body>
                </Card>
            </>
        );
    }
}
