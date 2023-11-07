import React, { Component } from "react";
import './Genre.css'
import { CardGroup, Container, Card, Row, Col } from "react-bootstrap";

export default class Genre extends Component {
    render() {
        return (
            <div className="indentation"> 
                <div class="container-fluid">
                    <div className="centered-genre">
                        <img
                            className="genre-img"
                            src="https://via.placeholder.com/400x400"
                        />
                        <img
                            className="genre-img"
                            src="https://via.placeholder.com/520x520"
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