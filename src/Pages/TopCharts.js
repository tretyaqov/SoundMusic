import React, { Component } from "react";
import './TopCharts.css'
import moty_img from '../Components/Pictures/ava.png' /*импорт картинки исполнителя года*/
import star_img from '../Components/Pictures/star.png' /*импорт картинки звёздочки*/

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
                <div className="row_motm">
                    <p>Исполнители месяца</p>
                </div>
                <div className="row_sotm">
                    
                </div>
                <div className="row_aotm">
                    
                </div>
            </div>
        )
    }
}