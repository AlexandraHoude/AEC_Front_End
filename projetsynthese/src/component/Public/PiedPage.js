import React, { Component } from 'react';
import "./Public.scss";

/**
 * Pied de page du site, utilisé sur la majorité des pages
 */

class PiedPage extends Component {
    render() {
        return(
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <h5>Ils sont à la recherche d'un stage</h5>
                        </div>
                        <br/>
                        <div className="col-xs-6 col-md-3">
                            <ul className="footer-links">
                                <li><a href="/#">Design Graphique</a></li>
                                <li><a href="/#">Designer</a></li>
                                <li><a href="/#">Développeur Front-End</a></li>
                                <li><a href="/#">Développeur</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <ul className="footer-links">
                                <li><a href="/#">Resources Emploi</a></li>
                                <li><a href="/#">Marketing</a></li>
                                <li><a href="/#">Développeur Mobile</a></li>
                                <li><a href="/#">Développeur App</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <ul className="footer-links">
                                <li><a href="/#">Product Manager</a></li>
                                <li><a href="/#">Ventes</a></li>
                                <li><a href="/#">Graphiste</a></li>
                                <li><a href="/#">Référencement</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-6 col-md-3">
                            <ul className="footer-links">
                                <li><a href="/#">Android</a></li>
                                <li><a href="/#">Product Owner</a></li>
                                <li><a href="/#">Chargé de Projet</a></li>
                                <li><a href="/#">Intégrateur</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-sm-6 col-xs-12">
                            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by LeStage.</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default PiedPage;
