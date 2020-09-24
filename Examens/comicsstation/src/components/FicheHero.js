import React from "react";
import { Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap"
import {API} from "../Constantes";
import {toast} from "react-toastify";
import "../styles/FicheHero.sass";
import Typist from 'react-typist';

export class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.removeHero = this.removeHero.bind(this);
    }

    async removeHero() {
        try{
            const response = await fetch(API + this.props.id, {
                method:'DELETE',
            });
            if(response.ok){
                const result = await response;
                this.props.history.push("/");
                toast.success("Supression du hero ");

                return result;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }

    render() {
        return (
            <>
                <Col xl="4" lg="6" md="6" sm="12" className="my-4">
                    <Card className="Carte h-100">
                        <Card.Body>
                            <Typist>
                                <div>
                                    <h2>{this.props.nom}</h2>
                                </div>
                                <div>
                                    <p>Pouvoir 1: {this.props.pouvoir[0].pouvoir1}</p>
                                    <p>Pouvoir 2: {this.props.pouvoir[1].pouvoir2}</p>
                                </div>
                            </Typist>
                        </Card.Body>
                        <Link to={"hero/"+ this.props.nom +"?id=" + this.props.id}>
                            <div className='text-center'>
                                <img src={this.props.urlPhoto} alt='photoHero' className='img-fluid img-card' />
                            </div>
                        </Link>
                        <Link className="btn btn-success mt-2" to={"hero/" + this.props.nom + "?id=" + this.props.id}><Typist>Modifier</Typist></Link>
                        <p className="btn btn-danger mt-1" onClick={this.removeHero}><Typist>Supprimer le Hero</Typist></p>
                    </Card>
                </Col>
            </>
        );
    }
}
