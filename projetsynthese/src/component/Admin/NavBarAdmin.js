import React, { Component } from 'react';
import {Navbar, Nav, Button} from "react-bootstrap";
import {faSignOutAlt, faPlus} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


/**
 * Barre de navigation du portail admin
 */

class NavBarAdmin extends Component {
    render() {
        return(
            <div>
                <Navbar bg="danger" variant="dark">
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Button variant="outline-light" className="ml-2"><FontAwesomeIcon icon={faPlus} /> Ajouter une offre de stage</Button>
                        <Button variant="outline-light" className="ml-2"><FontAwesomeIcon icon={faPlus} /> Ajouter une demande de stage</Button>
                    </Nav>
                    <Nav>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </Nav>

                </Navbar>
            </div>
        )
    }
}

export default NavBarAdmin;
