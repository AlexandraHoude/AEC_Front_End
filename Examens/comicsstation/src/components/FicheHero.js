import React from "react";
import { Link } from "react-router-dom";
import {Button, Card, Col} from "react-bootstrap"
import supprimerHero from "./FormModif"

export class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Col xl="4" lg="6" md="6" sm="12" className="my-4">
                    <Card className="bg-muted h-100">
                        <Card.Body>
                            <div>
                                <h4>{this.props.nom}</h4>
                            </div>
                            <div>
                                <p>{this.props.pouvoir[0].pouvoir1}</p>
                                <p>{this.props.pouvoir[1].pouvoir2}</p>
                            </div>
                        </Card.Body>
                        <Link className='border border' to={"hero/"+ this.props.nom +"?id=" + this.props.id}>
                            <div className='text-center'>
                                <img src={this.props.urlPhoto} alt='photoHero' className='img-fluid img-card' />
                            </div>
                        </Link>
                        <Link to={"hero/" + this.props.nom + "?id=" + this.props.id}>Modifier</Link>
                        <Button variant="outline-danger" type="submit" onClick={supprimerHero}>
                            Supprimer
                        </Button>
                    </Card>
                </Col>
            </>
        );
    }
}

export default Hero;
