import React from "react";
import SideNav, {NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Admin.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserNinja, faHome, faGraduationCap, faUserTie, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

/**
 * Barre de navigation latérale du portail admin
 */

function Sidebar() {
    return (
        <SideNav onSelect={selected => {  }}>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <FontAwesomeIcon icon={faHome} />
                    </NavIcon>
                    <NavText>Accueil</NavText>
                </NavItem>
                <NavItem eventKey="charts">
                    <NavIcon>
                        <FontAwesomeIcon icon={faCoffee} />
                    </NavIcon>
                    <NavText>Offres de stage</NavText>
                </NavItem>
                <NavItem eventKey="">
                    <NavIcon>
                        <FontAwesomeIcon icon={faUserNinja} />
                    </NavIcon>
                    <NavText>Demandes de stage</NavText>
                </NavItem>
                <NavItem eventKey="">
                    <NavIcon>
                        <FontAwesomeIcon icon={faGraduationCap} />
                    </NavIcon>
                    <NavText>Candidats</NavText>
                </NavItem>
                <NavItem eventKey="">
                    <NavIcon>
                        <FontAwesomeIcon icon={faUserTie} />
                    </NavIcon>
                    <NavText>Entreprises</NavText>
                </NavItem>
                <br/>
                <br/>
                <br/>
                <NavItem eventKey="">
                    <NavIcon>
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </NavIcon>
                    <NavText>Déconnexion</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
    );
}

export default Sidebar;
