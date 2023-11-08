import React, { Component } from "react";
import './Genre.css'
import { CardGroup, Container, Card, Row, Col } from "react-bootstrap";
import rappicture from '../Components/Pictures/rap.png'
import rockpicture from '../Components/Pictures/rock.png'
import poppicture from '../Components/Pictures/pop.png'
import drillpicture from '../Components/Pictures/drill.png'
import fonkpicture from '../Components/Pictures/fonk.png'
import dabsteppicture from '../Components/Pictures/dabstep.png'
import classikapicture from '../Components/Pictures/classika.png'
import djaspicture from '../Components/Pictures/djas.png'

export default class Genre extends Component {
    render() {
        return (
            <div className="indentation"> 
                <div class="container-fluid">
                    <div className="centered-genre">
                        <img
                            className="genre-img"
                            src={rappicture}
                        />
                        <img
                            className="genre-img"
                            src={rockpicture}
                        />
                        <img
                            className="genre-img"
                            src={poppicture}
                        />
                        <img
                            className="genre-img"
                            src={drillpicture}
                        />
                    </div>

                    <div className="centered-genre">
                        <img
                            className="genre-img"
                            src={fonkpicture}
                        />
                        <img
                            className="genre-img"
                            src={dabsteppicture}
                        />
                        <img
                            className="genre-img"
                            src={classikapicture}
                        />
                        <img
                            className="genre-img"
                            src={djaspicture}
                        />
                    </div>
                </div>
            </div>
        )
    }
}