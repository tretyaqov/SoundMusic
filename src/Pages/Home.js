import React, { Component } from "react";
import './Home.css'
import { CardGroup, Container, Card, Row, Col } from "react-bootstrap";
import lsppicture from '../Components/Pictures/Home/albmlsp.png'
import endgamepicture from '../Components/Pictures/Home/singleendgame.png'
import sidpicture from '../Components/Pictures/Home/albm-sid.png'
import astronautnetpicture from '../Components/Pictures/Home/single-astronautnet.png'
import rampicture from '../Components/Pictures/Home/albm-ram.png'
import pyrocpicture from '../Components/Pictures/Home/single-pyrokinesis-mukka.png'
import lidapicture from '../Components/Pictures/Home/albm-lida.png'
import rainpicture from '../Components/Pictures/Home/single-3-day-rain.png'
import scriptonpicture from '../Components/Pictures/Home/albm-scriptonite.png'
import dkpicture from '../Components/Pictures/Home/single-dk.png'



export default class Genre extends Component {
    render() {
        return (
            <div className="home-page">
            <div className="home-container">
                <div className="centered-home">
                        <img
                            className="lsp-img"
                            src={lsppicture}
                        />
                            <p className="lsp-text-name">
                                Несчастные люди
                                <p className="lsp-text-ispol">    
                                    ЛСП
                                <p>    
                                    альбом
                                </p>
                                </p>
                            </p>

                </div>
                <div className="centered-home">
                        <img
                            className="lsp-img"
                            src={endgamepicture}
                        />
                            <p className="lsp-text-name">
                                Заметка
                                <p className="lsp-text-ispol">    
                                    Эндшпиль feat. TumaniYO
                                <p>    
                                    сингл
                                </p>
                                </p>
                            </p>

                </div>
                <div className="centered-home">
                        <img
                            className="lsp-img"
                            src={sidpicture}
                        />
                            <p className="lsp-text-name">
                                BURNING MAN
                                <p className="lsp-text-ispol">    
                                    SIDODGI DUBOSHIT
                                <p>    
                                    альбом
                                </p>
                                </p>
                            </p>

                </div>
                <div className="centered-home">
                        <img
                            className="lsp-img"
                            src={astronautnetpicture}
                        />
                            <p className="lsp-text-name">
                                ВСПОМИНАЙ
                                <p className="lsp-text-ispol">    
                                    КОСМОНАВТОВ НЕТ
                                <p>    
                                    сингл
                                </p>
                                </p>
                            </p>

                </div>
                <div className="centered-home">
                        <img
                            className="lsp-img"
                            src={rampicture}
                        />
                            <p className="lsp-text-name">
                                ACTION
                                <p className="lsp-text-ispol">    
                                    RAM
                                <p>    
                                    альбом
                                </p>
                                </p>
                            </p>

                </div>
            </div>
            <div className="home-container">
            <div className="centered-home">
                    <img
                        className="lsp-img"
                        src={pyrocpicture}
                    />
                        <p className="lsp-text-name">
                            Днями-ночами
                            <p className="lsp-text-ispol">    
                                pyrokinesis, МУККА
                            <p>    
                                сингл
                            </p>
                            </p>
                        </p>

            </div>
            <div className="centered-home">
                    <img
                        className="lsp-img"
                        src={lidapicture}
                    />
                        <p className="lsp-text-name">
                            Дак Теилс 3
                            <p className="lsp-text-ispol">    
                                Lida
                            <p>    
                                альбом
                            </p>
                            </p>
                        </p>

            </div>
            <div className="centered-home">
                    <img
                        className="lsp-img"
                        src={rainpicture}
                    />
                        <p className="lsp-text-name">
                            Отпускай
                            <p className="lsp-text-ispol">    
                                3 дня дождя
                            <p>    
                                сингл
                            </p>
                            </p>
                        </p>

            </div>
            <div className="centered-home">
                    <img
                        className="lsp-img"
                        src={scriptonpicture}
                    />
                        <p className="lsp-text-name">
                            7
                            <p className="lsp-text-ispol">    
                                Скриптонит
                            <p>    
                                альбом
                            </p>
                            </p>
                        </p>

            </div>
            <div className="centered-home">
                    <img
                        className="lsp-img"
                        src={dkpicture}
                    />
                        <p className="lsp-text-name">
                            Ты меня не ищи
                            <p className="lsp-text-ispol">    
                                DK
                            <p>    
                                сингл
                            </p>
                            </p>
                        </p>

             </div>
         </div>
         </div>
        )
    }
}