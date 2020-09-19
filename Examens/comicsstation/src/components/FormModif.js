import React , {useState , useEffect} from "react";
import { Form, Button,Image,Container,Row,Col } from "react-bootstrap";
import {API} from "../constantes";
import {toast} from "react-toastify"

function FormModifierHero(props){
    const [donneesRecues , setDonneesRecues] = useState({nom: '', photo:"", pouvoir : ["",""] });
    const [heroID , setHeroID] = useState(props.location.search.substring(4,props.location.search.length));
    const [photos , setPhotos] = useState("");

    useEffect(() => {
        getHeroInfos();
    },[]);

    async function getHeroInfos() {
        try {

            const response = await fetch(API + heroID);
            const reponseDeApi = await response.json();
            setDonneesRecues(reponseDeApi);
            if (!response.ok) {
                throw Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function modifierHero(nom,photo,pouvoir1, pouvoir2) {
        try{
            const response = await fetch(API + heroID, {
                method:'PUT',
                headers: {'Content-Type': 'application/json'  },
                body:JSON.stringify({
                    nom: nom,
                    photo: photo,
                    pouvoir: [
                        {
                            nom: pouvoir1
                        },
                        {
                            nom: pouvoir2
                        }
                    ]
                })
            });
            if(response.ok){
                props.history.push("/");
                toast.success("Modification du Héro" + nom);

                return response;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }

    async function supprimerHero() {
        try{
            const response = await fetch(API + heroID, {
                method:'delete',
            });
            if(response.ok){
                //const jsonResponse = await response.json();
                props.history.push("/");
                toast.error("Supression du Héro ");

                return response;
            }
            throw new Error('Request failed!');
        }
        catch(error){
            console.log(error);
        }
    }

    function handleEdit(event){
        event.preventDefault();

        const nom = document.getElementById('nomHero').value;
        const photo = document.getElementById('photoHero').value;
        const pouvoir1 = document.getElementById('pouvoir1').value;
        const pouvoir2 = document.getElementById('pouvoir2').value;

        modifierHero(nom,photo,pouvoir1,pouvoir2);
    }

    function handlePhoto(event){
        const photos = document.getElementById('photoHero').value;
        setPhotos(photos);
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group controlId="nomHero">
                                <Form.Label>Nom de votre Héro</Form.Label>
                                <Form.Control type="text" defaultValue={donneesRecues.nom}/> {/*/ Faire le test avec value*/}
                            </Form.Group>
                            <Form.Group controlId="photoHero">
                                <Form.Label>URL de votre photo de Héro</Form.Label>
                                <Form.Control type="text" placeholder="Entrer une URL valide" onBlur={handlePhoto} defaultValue={donneesRecues.photo}/>
                            </Form.Group>
                            {donneesRecues.photo !== "" && <Image src={donneesRecues.photo} rounded width="125"/>}
                            <Form.Group controlId="pouvoir1">
                                <Form.Label>Nom de l'attaque 1</Form.Label>
                                <Form.Control type="text" placeholder="Entrer le nom de son premier pouvoir" defaultValue={donneesRecues.pouvoir[0].nom}/>
                            </Form.Group>
                            <Form.Group controlId="pouvoir2">
                                <Form.Label>Nom de son deuxième pouvoir</Form.Label>
                                <Form.Control type="text" placeholder="Entrer le nom de de son deuxième pouvoir" defaultValue={donneesRecues.pouvoir[1].nom}/>
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={handleEdit}>
                                Enregistrer
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <p className="btn btn-danger mt-5" onClick={supprimerHero}>Supprimer le Héro</p>
            </Container>
        </>
    );
}

export default FormModifierHero;