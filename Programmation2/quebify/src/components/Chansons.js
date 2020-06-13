import React from "react";
import {Container, Col, Button} from "react-bootstrap";
import '../components/Chansons.css'
import {Paroles} from "./Paroles";

export class Chansons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {paroles: false, chansonsClicker: '0'};
        this.gererAllerAuParoles = this.gererAllerAuParoles.bind(this);
        this.gererRevenirAlbum = this.gererRevenirAlbum.bind(this);
    }

    gererAllerAuParoles(e, id) {
        this.setState({paroles: true, chansonsClicker: id})
    }

    gererRevenirAlbum() {
        this.setState({paroles: false})
    }

    setParoles(elementClicker) {
        if(elementClicker[0].paroles === undefined){
            elementClicker[0].paroles = 'Paroles Indisponible';
        }
    }

    render() {
        let afficherParole = this.gererAllerAuParoles;
        let items = this.props.data.chansons.title;
        const listeChansons = items.map(function (item) {
           return <li onClick={(e) => afficherParole(e, item.id)} key={item.nom}>{item.nom}</li>
        });

        if (this.state.paroles) {
            let elementClicker = this.props.data.chansons.title.filter(chansons => chansons.id === this.state.chansonsClicker);
            this.setParoles(elementClicker);
            return (
                <>
                    <Paroles paroles={elementClicker[0].paroles}/>
                    <Button onClick={this.gererRevenirAlbum}>Revenir à l'album</Button>
                </>
            );
        } else {
            return (
                <Container>
                    <Col>
                        <img alt="" src={this.props.data.src}/>
                        <ol>
                            {listeChansons}
                        </ol>
                    </Col>
                </Container>
            );
        }
    }
}

