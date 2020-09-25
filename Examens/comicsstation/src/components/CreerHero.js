import React from "react";
import { FormAjout } from "./FormAjout";

export class CreerHero extends React.Component {
    render() {
        return (
            <>
                <FormAjout history={this.props.history} />
            </>
        );
    }
}