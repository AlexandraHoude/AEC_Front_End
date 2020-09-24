import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify"
import { API } from "../Constantes";
import {Banner} from "./banniereImage";
import "../styles/FormAjout.sass";

export class FormAjout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {urlPhoto: "", setErrors : {}};

        this.handleAdd = this.handleAdd.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.AjouterHero = this.AjouterHero.bind(this);
    }

    async AjouterHero(nom,urlPhoto,pouvoir1, pouvoir2) {
        try {
            const response = await fetch(API, {
                method:'POST',
                headers: {'Content-Type': 'application/json'  },
                body:JSON.stringify({
                    nom: nom,
                    urlPhoto: urlPhoto,
                    pouvoir: [

                        {
                            pouvoir1: pouvoir1
                        },
                        {
                            pouvoir2: pouvoir2
                        }
                    ]
                })
            });
            if(response.ok){
                const jsonResponse = await response.json();
                this.props.history.push("/");
                toast.success("Ajout du Héro " + nom);

                return jsonResponse;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }

    handleAdd(event){
        event.preventDefault();

        const nom = document.getElementById('nomHero').value;
        const urlPhoto = document.getElementById('photoHero').value;
        const pouvoir1 = document.getElementById('pouvoir1').value;
        const pouvoir2 = document.getElementById('pouvoir2').value;

        this.AjouterHero(nom,urlPhoto,pouvoir1,pouvoir2);
    }

    handlePhoto(event){
        const photos = document.getElementById('photoHero').value;
        this.setState( {urlPhoto : photos});
    }

    render() {
        return (
            <>
                <Banner />
                <Container>
                    <Row>
                        <Col width={100}>
                            <Form>
                                <Form.Group controlId="nomHero">
                                    <Form.Label>Nom de votre Héro</Form.Label>
                                    <Form.Control type="text" placeholder="Entrer le nom de votre Héro" />
                                </Form.Group>
                                <Form.Group controlId="photoHero">
                                    <Form.Label>URL de votre photo de Héro</Form.Label>
                                    <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto}/>
                                </Form.Group>
                                {this.state.urlPhoto !== "" && <Image src={this.state.urlPhoto} rounded width="125"/>}
                                <Form.Group controlId="pouvoir1">
                                    <Form.Label>Nom de son premier pouvoir</Form.Label>
                                    <Form.Control type="text" placeholder="Entrer le nom de son premier pouvoir" />
                                </Form.Group>
                                <Form.Group controlId="pouvoir2">
                                    <Form.Label>Nom de son deuxième pouvoir</Form.Label>
                                    <Form.Control type="text" placeholder="Entrer le nom de de son deuxième pouvoir" />
                                </Form.Group>
                                <Button variant="danger" type="submit" onClick={this.handleAdd}> Enregistrer </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}