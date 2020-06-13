import React from 'react';
import '../components/App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Recherche}  from '../components/Recherche';
import {Albums} from './Albums';
import {Chansons} from "./Chansons";
import {Button} from "react-bootstrap";


var tabAlbums = [
    {
        id: '1',
        src :require("../img/alexisonfire.jpg"),
        alt:"Alexisonfire" ,
        title:"Crisis",
        artiste: "Alexisonfire",
        chansons: {
            title: [
                {
                    id: '1',
                    nom: 'Drunks, Lovers, Sinners and Saints',
                    paroles: 'Alright!\n' +
                        'This is from our hearts\n' +
                        'So suddenly a super chart to make some mistakes\n' +
                        'We\'ll make some mistakes\n' +
                        'Well it\'s a long time coming when your giving it everything\n' +
                        'Alright!\n' +
                        'This is from our hearts\n' +
                        'So suddenly a super chart to make some mistakes\n' +
                        'We\'ll make some mistakes\n' +
                        'Well it\'s a long time coming when your giving it everything\n' +
                        'Alright!\n' +
                        'This is from our hearts\n' +
                        'And if you reach for the sun\n' +
                        'You\'ll find that my conscience just can\'t put out\n' +
                        'Alright!\n' +
                        'This is from our hearts (from our hearts)\n' +
                        'And it\'s always gonna be a part\n' +
                        'Well this crowd, don\'t understand\n' +
                        'Well I feel the same\n' +
                        'I won\'t ever change\n' +
                        'Not a jaded hair up on my head\n' +
                        'Are you pretending?\n' +
                        '(that you care!)\n' +
                        'Are you even listening?\n' +
                        'Are you pretending?\n' +
                        '(that you understand!)\n' +
                        'Are you even\n' +
                        'Straight to the left\n' +
                        'Straight to the right\n' +
                        'Cuz my heart, my heart is strong\n' +
                        'We ride to fight\n' +
                        'Straight to the left\n' +
                        'Straight to the right\n' +
                        'Cuz my heart, my heart is strong\n' +
                        'And we ride to fight\n' +
                        'Straight to the left\n' +
                        'Straight to the right\n' +
                        'Cuz my heart, my heart is strong\n' +
                        'We ride to fight\n' +
                        'Straight to the left\n' +
                        'Straight to the right\n' +
                        'Cuz my heart, my heart is strong\n' +
                        'And we ride to fight\n' +
                        'Are you pretending?\n' +
                        '(that you care!)\n' +
                        'Are you even listening?\n' +
                        'Are you pretending?\n' +
                        '(that you understand)\n' +
                        'Are you even listening?\n' +
                        'Are you pretending?\n' +
                        'I know, I know!\n' +
                        'Are you even listening?!\n' +
                        'Are you pretending?!\n' +
                        'That your heart\'s in the right place!\n' +
                        'Are you pretending?\n' +
                        'Are you even listening?\n' +
                        'Are you pretending?\n' +
                        'Are you even\n' +
                        'There\'s no need to waste my time\n' +
                        'Spending your life\n' +
                        'Jumping from sinking ship to sinking ship\n' +
                        'I think I\'d rather drown\n' +
                        'I know I\'d rather drown!\n' +
                        'And I feel the same\n' +
                        'I won\'t ever change\n' +
                        'Not a jaded hair up on my head!'
                },
                {
                    id: '2',
                    nom: 'This Could Be Anywhere in the World',
                    paroles: 'This town is his cause burying my neck\n' +
                        'This air it takes off, without rushing, without haste\n' +
                        'The streets are in distress,\n' +
                        'The sun suffocates behind darkened skies\n' +
                        'The grass is growing under my feet\n' +
                        'I\'m thinking it wont be long before you get\n' +
                        'The line-up seems endless,\n' +
                        'Underneath the salvation sign\n' +
                        'We are the dead ones, we are the lost cause\n' +
                        'We are the people who will not blame ourselves from this cause\n' +
                        'The city, the city is haunted,\n' +
                        'By ghosts (ghosts) from broken homes (homes)\n' +
                        'Because this city, this city is haunted\n' +
                        'There\'s no hope (hope) left for these souls (souls)\n' +
                        'Every step I take,\n' +
                        'I leave a small piece of myself behind\n' +
                        'Soon there will be nothing left\n' +
                        'The cracks in the pavement,\n' +
                        'Match the cracks in their weathered skin,\n' +
                        'The skies a brick wall, the clouds a juggernaut\n' +
                        'Each day as we know\n' +
                        'I stare in amazement, I can\'t believe this is where I live\n' +
                        'Every breath I take, I feel my lungs fail\n' +
                        'The city, the city is haunted,\n' +
                        'By ghosts (ghosts) from broken homes (homes)\n' +
                        'Because this city, this city is haunted\n' +
                        'There\'s no hope (hope) left for these souls (souls)\n' +
                        'Our steps seal fate\n' +
                        'Our steps seal fate\n' +
                        '(this is our celebration, come join the lost souls)\n' +
                        '(this is our celebration, come join the lost souls)\n' +
                        'The city, the city is haunted\n' +
                        'Walk with us\n' +
                        'The city, the city is haunted,\n' +
                        'By ghosts (ghosts) from broken homes (homes)\n' +
                        'Because this city, this city is haunted\n' +
                        'There\'s no hope (hope) left for these souls (souls)'
                },
                {
                    id: '3',
                    nom: 'Mailbox Arson',
                },
                {
                    id: '4',
                    nom: 'Boiled Frogs',
                },
                {
                    id: '5',
                    nom: 'We Are the Sound',
                },
                {
                    id: '6',
                    nom: 'You Burn First',
                },
                {
                    id: '7',
                    nom: 'We Are the End',
                },
                {
                    id: '8',
                    nom: 'Crisis',
                },
                {
                    id: '9',
                    nom: 'Keep It on Wax',
                },
                {
                    id: '10',
                    nom: 'To a Friend',
                },
                {
                    id: '11',
                    nom: 'Rough Hands',
                },
            ]

        }
    } ,
    {
        id: '2',
        src :require("../img/atreyu.jpg"),
        alt:"Atreyu" ,
        title:"lead sails paper anchor",
        artiste: "Atreyu",
        chansons: {
            title: [
                {
                    id: '1',
                    nom: 'Doomsday',
                },
                {
                    id: '2',
                    nom: 'Honor',
                },
                {
                    id: '3',
                    nom: 'Falling Down',
                },
                {
                    id: '4',
                    nom: 'Becoming the Bull',
                },
                {
                    id: '5',
                    nom: 'Two Become One',
                },
                {
                    id: '6',
                    nom: 'Lose It',
                },
                {
                    id: '7',
                    nom: 'No One Cares',
                },
                {
                    id: '8',
                    nom: 'Cant Happen Here',
                },
                {
                    id: '9',
                    nom: 'Slow Burn',
                },
                {
                    id: '10',
                    nom: 'Blow',
                },
                {
                    id: '11',
                    nom: 'Lead Sails (and a Paper Anchor)',
                },
            ],
        }
    } ,
    {
        id: '3',
        src :require("../img/deftones.jpg"),
        alt:"Deftones" ,
        title:"Deftones",
        artiste: "Deftones",
        chansons: {
            title: [
                {
                    id: '1',
                    nom: 'Hexagram',
                },
                {
                    id: '2',
                    nom: 'Needles and Pins',
                },
                {
                    id: '3',
                    nom: 'Minerva',
                },
                {
                    id: '4',
                    nom: 'Good Morning Beautiful',
                },
                {
                    id: '5',
                    nom: 'Deathblow',
                },
                {
                    id: '6',
                    nom: 'When Girls Telephone Boys',
                },
                {
                    id: '7',
                    nom: 'Battle-Axe',
                },
                {
                    id: '8',
                    nom: 'Lucky You',
                },
                {
                    id: '9',
                    nom: 'Bloody Cape',
                },
                {
                    id: '10',
                    nom: 'Anniversary of an Uninteresting Event',
                },
                {
                    id: '11',
                    nom: 'Moana',
                },
            ]
        }
    } ,
    {
        id: '4',
        src :require("../img/inthismoment.png"),
        alt:"Inthismoment" ,
        title:"Black Widow",
        artiste: "In this moment",
        chansons: {
            title: [
                {
                    id: '1',
                    nom: 'The Infection',
                },
                {
                    id: '2',
                    nom: 'Sex Metal Barbie',
                },
                {
                    id: '3',
                    nom: 'Big Bad Wolf',
                },
                {
                    id: '4',
                    nom: 'Dirty Pretty',
                },
                {
                    id: '5',
                    nom: 'Black Widow',
                },
                {
                    id: '6',
                    nom: 'Sexual Hallucination',
                },
                {
                    id: '7',
                    nom: 'Sick Like Me',
                },
                {
                    id: '8',
                    nom: 'Bloody Creature Poster Girl',
                },
                {
                    id: '9',
                    nom: 'The Fighter',
                },
                {
                    id: '10',
                    nom: 'Bones',
                },
                {
                    id: '11',
                    nom: 'Natural Born Sinner',
                },
                {
                    id: '12',
                    nom: 'Into the Darkness',
                },
                {
                    id: '13',
                    nom: 'Out of Hell',
                },
            ]
        }
    } ,
    {
        id: '5',
        src :require("../img/manson.png"),
        alt:"Manson" ,
        title:"The golden age of grotesque",
        artiste: "Marilyn Manson",
        chansons: {
            title: [
                {
                    id: '1',
                    nom: 'Thaeter',
                },
                {
                    id: '2',
                    nom: 'This Is the New Shit',
                },
                {
                    id: '3',
                    nom: 'Mobscene',
                },
                {
                    id: '4',
                    nom: 'Doll-Dagga Buzz-Buzz Ziggety-Zag',
                },
                {
                    id: '5',
                    nom: 'Use Your Fist and Not Your Mouth',
                },
                {
                    id: '6',
                    nom: 'The Golden Age of Grotesque',
                },
                {
                    id: '7',
                    nom: 'Saint',
                },
                {
                    id: '8',
                    nom: 'Ka-Boom Ka-Boom',
                },
                {
                    id: '9',
                    nom: 'Slutgarden',
                },
                {
                    id: '10',
                    nom: 'Spade',
                    paroles: 'des paroles blabla'
                },
                {
                    id: '11',
                    nom: 'Para-noir',
                },
                {
                    id: '12',
                    nom: 'The Bright Young Things',
                },
                {
                    id: '13',
                    nom: 'Better of Two Evils',
                },
                {
                    id: '14',
                    nom: 'Vodevil',
                },
                {
                    id: '15',
                    nom: 'Obsequey (The Death of Art)',
                },
            ]
        }
    } ,
    {
        id: '6',
        src :require("../img/slipknot.jpg"),
        alt:"slipknot" ,
        title:"Iowa",
        artiste: "Slipknot",
        chansons: {
            title: [
                {
                    id: '1',
                    nom: '(515)',
                },
                {
                    id: '2',
                    nom: 'People = Shit',
                },
                {
                    id: '3',
                    nom: 'Disasterpiece',
                },
                {
                    id: '4',
                    nom: 'My Plague',
                },
                {
                    id: '5',
                    nom: 'Everything Ends',
                },
                {
                    id: '6',
                    nom: 'The Heretic Anthem',
                },
                {
                    id: '7',
                    nom: 'Gently',
                },
                {
                    id: '8',
                    nom: 'Left Behind',
                },
                {
                    id: '9',
                    nom: 'The Shape',
                },
                {
                    id: '10',
                    nom: 'I Am Hated',
                },
                {
                    id: '11',
                    nom: 'Skin Ticket',
                },
                {
                    id: '12',
                    nom: 'New Abortion',
                },
                {
                    id: '13',
                    nom: 'Metabolic',
                },
                {
                    id: '14',
                    nom: 'Iowa',
                },
            ]
        }
    } ,
];


export class Librairie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  recherche: "" , ajouter :false, hovered :false, afficherListeChansons: false, idChansonAfficher: 0};
        this.Header = this.Header.bind(this);
        this.NouvelleRecherche =this.NouvelleRecherche.bind(this);
        this.Recherche =this.Recherche.bind(this);
        this.AfficherAlbums =this.AfficherAlbums.bind(this);
        this.gererClickSurAlbum = this.gererClickSurAlbum.bind(this);
        this.gererRevenirLibrairie = this.gererRevenirLibrairie.bind(this);
    }

    gererClickSurAlbum(e) {
        this.setState({idChansonAfficher: e.target.id});
        this.setState({afficherListeChansons: true});
    }

    gererRevenirLibrairie() {
        this.setState({afficherListeChansons: false});
    }

    AfficherAlbums() {
        if (this.state.afficherListeChansons) {
            let elementClicker = tabAlbums.filter(album => album.id === this.state.idChansonAfficher);
                return (
                    <>
                        <Chansons style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                                  data={elementClicker[0]}
                        />
                        <Button onClick={this.gererRevenirLibrairie}>Revenir à la librairie</Button>
                    </>
                );
        } else {
            return (
                <Row>
                    {tabAlbums.map((element, i) => element.title.toLowerCase().includes(this.state.recherche.toLowerCase()) &&
                        <Albums key={"album" + i}
                                src={element.src}
                                alt={element.alt}
                                title={element.title}
                                artiste={element.artiste}
                                chansons={element.chansons}
                                id={element.id}
                                action={this.gererClickSurAlbum}>
                        </Albums>)}
                </Row>
            )
        }
    }


    Header(){
        return (
            <Row id="header" className="d-flex pt-6">
                <Col xl="8"><h1 className="text-white pt-5">Albums</h1></Col>
                <Col xl="4"><div className="pt-5">{this.Recherche()}</div></Col>
            </Row>
        )
    }

    Recherche(){
        return (
            <Recherche onBtnClick={this.NouvelleRecherche}/>
        );
    }


    NouvelleRecherche(nouvelleRecherche){
        this.setState({ recherche: nouvelleRecherche });
    }



    render() {
        return (    <>
                {this.Header()}
                <br></br>
                <br></br>
                {this.AfficherAlbums()}
            </>
        );
    }
}

