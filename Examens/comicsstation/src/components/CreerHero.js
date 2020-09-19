import React from "react";
import { FormAjout } from "./FormAjout";

export class CreerHero extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };

    }
    render() {
        return (
            <>
                <FormAjout history={this.props.history} />
            </>
        );
    }
}