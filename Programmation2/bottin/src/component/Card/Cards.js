import React, { Component } from "react";
import Card from "./CardUI";

import img1 from "img/daysgone.png";
import img2 from "img/ratchet.png";
import img3 from "img/uncharted4.png";

class Cards extends Component {
    render() {
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card imgsrc={img1} title='Console' />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img2} title='Playground' />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={img3} title='Adventure' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;