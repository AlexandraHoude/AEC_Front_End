import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import NavBarAdmin from "./NavBarAdmin";

/**
 * Accueil du portail admin
 */

class AccueilAdmin extends Component {
    render() {
        return(
            <div>
                <NavBarAdmin></NavBarAdmin>
                <Sidebar></Sidebar>
            </div>
        )
    }
}

export default AccueilAdmin;
