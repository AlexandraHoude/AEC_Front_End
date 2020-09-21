import React from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {toast} from "react-toastify"
import {API} from "../Constantes";

export class FormModif extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            donneesRecues: {id: 0, nom: '', urlPhoto: "", pouvoir : ["",""] },
            setErrors : {}};

        this.handleEdit = this.handleEdit.bind(this);
        this.handlePhoto = this.handlePhoto.bind(this);
        this.editHero = this.editHero.bind(this);
        this.removeHero = this.removeHero.bind(this);
    }

    async componentDidMount() {
        try {
            await this.setState({id : this.props.location.search.substring(4, this.props.location.search.length)});
            await console.log(this.state.id);
            const response = await fetch(API + this.state.id);
            const reponseDeApi = await response.json();
            this.setState({ donneesRecues: reponseDeApi });

            if (!response.ok) {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async editHero(nom, urlPhoto, pouvoir1, pouvoir2) {
        try{
            const response = await fetch(API + this.state.id, {
                method:'PUT',
                headers: {'Content-Type': 'application/json'  },
                body:JSON.stringify({_id : this.state.id,
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
                toast.success("Modification du hero " + nom);

                return jsonResponse;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }

    async removeHero() {
        try{
            const response = await fetch(API + this.state.id, {
                method:'DELETE',
            });
            if(response.ok){
                console.log(response);
                console.log("SUPPRESSION!");
                this.props.history.push("/");
                toast.error("Supression du hero ");

                return response;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }

    handleEdit(event){
        event.preventDefault();

        const nom = document.getElementById('nomHero').value;
        const urlPhoto = document.getElementById('photoHero').value;
        const pouvoir1 = document.getElementById('pouvoir1').value;
        const pouvoir2 = document.getElementById('pouvoir2').value;

        this.editHero(nom, urlPhoto, pouvoir1, pouvoir2);
    }

    handlePhoto(event){
        const photos = document.getElementById('urlPhoto').value;
        this.setState( {urlPhoto : photos});
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group controlId="nomHero">
                                    <Form.Label>Nom du hero</Form.Label>
                                    <Form.Control type="text" defaultValue={this.state.donneesRecues.nom}/> {}
                                </Form.Group>
                                <Form.Group controlId="photoHero">
                                    <Form.Label>URL d'une photo du Hero</Form.Label>
                                    <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={this.handlePhoto} defaultValue={this.state.donneesRecues.urlPhoto}/>
                                </Form.Group>
                                {this.state.donneesRecues.urlPhoto !== "" && <Image src={this.state.donneesRecues.urlPhoto} rounded width="125"/>}
                                <Form.Group controlId="pouvoir1">
                                    <Form.Label>Nom de l'attaque 1</Form.Label>
                                    <Form.Control type="text" placeholder="Entrer le nom du pouvoir 1" defaultValue={this.state.donneesRecues.pouvoir[0].pouvoir1}/>
                                </Form.Group>
                                <Form.Group controlId="pouvoir2">
                                    <Form.Label>Nom de l'attaque 2</Form.Label>
                                    <Form.Control type="text" placeholder="Entrer le nom du pouvoir 2" defaultValue={this.state.donneesRecues.pouvoir[1].pouvoir2 }/>
                                </Form.Group>

                                <Button variant="primary" type="submit" onClick={this.handleEdit}>
                                    Enregistrer
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                    <p className="btn btn-danger mt-5" onClick={this.removeHero}>Supprimer le Hero</p>
                </Container>
            </>
        );
    }
}

export default FormModif;