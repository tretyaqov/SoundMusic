import React, { Component } from "react";
import './TopCharts.css'
import moty_img from '../Components/Pictures/ava.png' /*импорт картинки исполнителя года*/
import star_img from '../Components/Pictures/star.png' /*импорт картинки звёздочки*/
import oleg_img from '../Components/Pictures/oleg.png' /*импорт олега*/
import scripto_img from '../Components/Pictures/scripto.png' /*импорт скриптонита*/
import jizus_img from '../Components/Pictures/jisuz.png' /*импорт олега*/

export default class TopCharts extends Component {
    render() {
        return (
            <div>
                <div className="position1">
                    <img
                        className="moty-img"
                        src={moty_img}
                    />
                    <div className="moty-txt">
                        <p className="string_moty">Исполнитель года</p>
                        <p className="string_musican">"CMH"
                            <img
                                className="star-img"
                                src={star_img}
                            />
                        </p>
                        <p className="string_plays">Прослушиваний</p>
                        <p className="string_counter">"10 409 011"</p>
                    </div>
                </div>
                <div className="string_colums">
                    <p className="string_motm ">Исполнители месяца</p> 
                    <p className="string_sotm ">Песни месяца</p> 
                    <p className="string_aotm">Альбомы месяца</p>
                    <div className="line"></div> 
                </div>
                
                <div className="flex">
                    <div className="chill">
                        <div className="row_motm">
                            <img
                                className="motm-img"
                                src={oleg_img}
                            />
                            <div className="text">ЛСП</div>
                        </div>
                        <div className="row_motm">
                            <img
                                className="motm-img"
                                src={scripto_img}
                            />
                            <div className="text">СКРИПТОНИТ</div>
                        </div>
                        <div className="row_motm">
                            <img
                                className="motm-img"
                                src={jizus_img}
                            />
                            <div className="text">ДЖИЗУС</div>
                        </div>
                    </div>
                <div className="chill">
                        <div className="row_motm">
                            <img
                                className="motm-img"
                                src={oleg_img}
                            />
                            <div className="text">ЛСП</div>
                        </div>
                        <div className="row_motm">
                            <img
                                className="motm-img"
                                src={scripto_img}
                            />
                            <div className="text">СКРИПТОНИТ</div>
                        </div>
                        <div className="row_motm">
                            <img
                                className="motm-img"
                                src={jizus_img}
                            />
                            <div className="text">ДЖИЗУС</div>
                        </div>
                    </div>
                    <div className="chill">
                        <div className="row_motm">
                            <img
                                className="motm-img"
                                src={oleg_img}
                            />
                            <div className="text">ЛСП</div>
                        </div>
                        <div className="row_motm">
                            <img
                                className="motm-img"
                                src={scripto_img}
                            />
                            <div className="text">СКРИПТОНИТ</div>
                        </div>
                        <div className="row_motm">
                            <img
                                className="motm-img"
                                src={jizus_img}
                            />
                            <div className="text">ДЖИЗУС</div>
                        </div>
                    </div>
                </div>
                <div className="row_sotm">
                    
                </div>
                <div className="row_aotm">
                    
                </div>
            </div>
        )
    }
}