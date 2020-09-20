import React from "react";
import { Link } from "react-router-dom";
import {Card, Col} from "react-bootstrap"

export class Hero extends React.Component {


    render() {
        return (
            <>
                <Col xl="4" lg="6" md="6" sm="12" className="my-4">

                    <Card className="bg-muted h-100">
                        <Card.Body >
                            <div>
                                <h4>{this.props.donneesRecues.nom} </h4>
                            </div>
                            <div>
                                {this.props.donneesRecues.pouvoir}
                            </div>
                        </Card.Body>
                        <Link className='border border' to={"Hero/"+ this.props.donneesRecues.nom +"?id=" + this.props.id}>
                            <div className='text-center'>
                                <img src={this.props.donneesRecues.photo} alt='photoHero' className='img-fluid img-card' />
                            </div>
                        </Link>

                    </Card>

                </Col>

            </>
        );
    }

}
