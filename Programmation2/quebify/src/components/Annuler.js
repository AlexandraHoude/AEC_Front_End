import React from 'react';
import Button from "react-bootstrap/Button";


export class Annuler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.handleReset=this.handleReset.bind(this);
    }
    render() {
        return (
            <Button type="reset" onClick={this.handleReset}  variant="primary">Annuler</Button>
        );
    }

    handleReset(){
        this.props.onAnnuler(false);
    }
}
