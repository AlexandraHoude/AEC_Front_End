import React from 'react';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from "react-bootstrap/Button";
import {Annuler}  from './Annuler';

export class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = {stringRecherche: "" , reinitialiser:false, rechercheActive:false};
        this.gererRechercheChange = this.gererRechercheChange.bind(this);
        this.gererRecherche = this.gererRecherche.bind(this);
        this.gererTouches = this.gererTouches.bind(this);
        this.changerEtatReinitialisation=this.changerEtatReinitialisation.bind(this);
    }

    gererRechercheChange(e){
        const search = e.target.value;
        this.setState({stringRecherche: search});
        if (e.target.value.length===0 && this.state.rechercheActive===false){
            this.setState({reinitialiser: false});
        } else {
            this.setState({reinitialiser: true});
        }
    }

    gererRecherche() {
        this.props.onBtnClick(this.state.stringRecherche);
        if (this.state.stringRecherche!==""){
            this.setState({reinitialiser: true});
            this.setState({rechercheActive: true});
        }else {
            this.setState({reinitialiser: false});
            this.setState({rechercheActive: false});
        }
    }

    gererTouches(target) {
        if(target.charCode===13){
            this.gererRecherche();
        }
    }

    changerEtatReinitialisation(annuler){
        this.setState({reinitialiser: annuler});
        this.reinitialiser();
    }

    reinitialiser(){
        document.getElementById("inputRecherche").value="";
        this.setState({stringRecherche: ""});
        this.props.onBtnClick("");
        this.setState({rechercheActive: false});
    }

    Annuler(){
        if (this.state.reinitialiser===true)
            return <Annuler onAnnuler={this.changerEtatReinitialisation}/>;
    }


    render() {
        return (
            <div className="d-flex justify-content-start">
                <Form id="formRecherche" inline onSubmit={e => {e.preventDefault()}}>
                    <FormControl id="inputRecherche" onKeyPress={this.gererTouches} onChange={this.gererRechercheChange}  type="text" placeholder="Recherche" />
                    <Button type="Button" id="recherche" onClick={this.gererRecherche} variant="primary">Rechercher</Button>
                    {this.Annuler()}
                </Form>
            </div>
        );
    }
}