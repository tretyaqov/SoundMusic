import React, { Component } from "react";
import './Genre.css'
import { CardGroup, Container, Card, Row, Col } from "react-bootstrap";
import rappicture from '../Components/Pictures/Darkly - pod etimi zvyozdami.png'
import rockpicture from '../Components/Pictures/GONE fludd - dreamgarden.png'

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
                            src="https://via.placeholder.com/320x320"
                        />
                        <img
                            className="genre-img"
                            src="https://via.placeholder.com/320x320"
                        />
                    </div>

                    <div className="centered-genre">
                        <img
                            className="genre-img"
                            src="https://via.placeholder.com/320x320"
                        />
                        <img
                            className="genre-img"
                            src="https://via.placeholder.com/320x320"
                        />
                        <img
                            className="genre-img"
                            src="https://via.placeholder.com/320x320"
                        />
                        <img
                            className="genre-img"
                            src="https://via.placeholder.com/320x320"
                        />
                    </div>
                </div>
            </div>
        )
    }
}