import React, { Component } from 'react';
import schema from "../../img/process.png"
import "./Public.scss";
import Button from "react-bootstrap/Button";

/**
 * Image Schema explication processus
 */

class Schema extends Component {
    render() {
        return(
            <div>
                <div className="Schema" >
                    <img src={schema} alt="Schema" />
                    <br/>
                    <Button variant="danger" size="lg" className="mt-5" active>Inscrivez-vous maintenant </Button>{' '}
                    <br/>
                </div>
            </div>
        )
    }
}

export default Schema;
