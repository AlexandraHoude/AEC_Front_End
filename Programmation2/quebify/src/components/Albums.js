import React from 'react';
import '../components/App.css';
import Col from 'react-bootstrap/Col';
import Card  from 'react-bootstrap/Card';
import play from '../img/play.png';
import '../components/Album.css';

export class Albums extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
    }

    render() {
        return (
            <Col xl="3" className="m-2 text-center pl-5">
                <Card className="h-100 bg-light">
                    <Card.Img variant="top" src={this.props.src}
                              onMouseOut={() => this.setState({hovered: false})}
                              onMouseOver={() => this.setState({hovered: true})}
                              onClick={this.props.action}
                              id={this.props.id}
                    />
                    {this.state.hovered ? <img src={play} alt="" className="img-play playButton"/> : null}
                    <Card.Body>
                        <Card.Title><h2>{this.props.title}</h2></Card.Title>
                        <Card.Text>{this.props.artiste}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}
