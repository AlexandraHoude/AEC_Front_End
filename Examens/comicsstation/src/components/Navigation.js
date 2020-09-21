import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../styles/navigationBar.sass';
import Logo from "../img/comic.png";
import anime from "animejs";

export class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    render() {
        const style = {
            color: "White"
        };
        const activeStyle = { color: "Red" };
        return (
            <>
                <Navbar className="navigationBar">
                     <Navbar.Brand href="/" className={"navbarBrand"}><img alt="Logo" src={Logo} style={{width: 120, height: 50}}/></Navbar.Brand>
                    <Nav>
                        <NavLink exact to="/" style={style} activeStyle={activeStyle} className="NavText"> Accueil </NavLink>
                        <NavLink to="/CreerHero" style={style} activeStyle={activeStyle} className="NavText"> Créer votre héro </NavLink>
                        <NavLink to="/ListeFicheHero" style={style} activeStyle={activeStyle} className="NavText"> Liste des héros </NavLink>
                    </Nav>
                </Navbar>
                <br/>
            </>
        );
    }
}