import React from "react";
import {Container} from "react-bootstrap";


export class Paroles extends React.Component {

    render() {
        return (
            <Container>
                {this.props.paroles}
            </Container>
        );
    }
}