import React from "react";
import Button from "react-bootstrap/Button";

export class Deconnexion extends React.Component {
    gererDeconnexion() {
        this.props.onClick(false);
    }
    render() {
        return (
            <div className="pt-4">
                <Button variant="primary" onClick={() => this.gererDeconnexion()}>
                    Déconnexion
                </Button>
            </div>
        );
    }
}