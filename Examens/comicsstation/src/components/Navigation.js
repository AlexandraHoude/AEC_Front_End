import React from "react";
import { Nav, Navbar} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../styles/navigationBar.sass';
import Logo from "../img/comic.png";
import {Button}  from "react-bootstrap";
import { motion } from "framer-motion";

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
                <Navbar className="navigationBar" expand={'sm' | 'md' | 'lg' | 'xl'}>
                    <motion.div
                        animate={{
                            scale: [1, 2, 2, 1, 1],
                            rotate: [0, 0, 270, 270, 0],
                            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                        }}
                    >
                        <Navbar.Brand href="/" className={"navbarBrand"}><img alt="Logo" src={Logo} style={{width: 120, height: 50}}/></Navbar.Brand>
                    </motion.div>
                    <Nav>
                        <NavLink exact to="/" style={style} activeStyle={activeStyle} className="NavText"> Accueil </NavLink>
                        <NavLink to="/CreerHero" style={style} activeStyle={activeStyle} className="NavText"> Créer votre héro </NavLink>
                        <NavLink to="/ListeFicheHero" style={style} activeStyle={activeStyle} className="NavText"> Liste des héros </NavLink>
                    </Nav>
                    <Button variant="outline-danger" id="boutonInstall" width={200}>Installer l'application</Button>
                </Navbar>
                <br/>
            </>
        );
    }
}