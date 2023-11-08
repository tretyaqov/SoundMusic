import React, { Component } from "react";
import './TopCharts.css'
import moty_img from '../Components/Pictures/ava.png' /*импорт картинки исполнителя года*/
import star_img from '../Components/Pictures/star.png' /*импорт картинки звёздочки*/
import oleg_img from '../Components/Pictures/oleg.png' /*импорт олега*/
import scripto_img from '../Components/Pictures/scripto.png' /*импорт скриптонита*/
import jizus_img from '../Components/Pictures/jisuz.png' /*импорт джизус*/
import oversize_img from '../Components/Pictures/mudblood.png'
import molchi_img from '../Components/Pictures/shut_up.png'
import fool_img from '../Components/Pictures/fool.png'
import my_name_lida_img from '../Components/Pictures/my_name_lida.png'
import mudblood_img from '../Components/Pictures/mudblood.png'
import hattori_img from '../Components/Pictures/hattori.png'

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
                    <p className="string_text">Исполнители месяца</p> 
                    <p className="string_text">Песни месяца</p> 
                    <p className="string_text">Альбомы месяца</p>
                    <div className="line"></div> 
                </div>
                
                <div className="flex">
                    <div className="rows1">
                        <div className="rows">
                            <img
                                className="rows-img"
                                src={oleg_img}
                            />
                            <div className="text">ЛСП</div>
                        </div>
                        <div className="rows">
                            <img
                                className="rows-img"
                                src={scripto_img}
                            />
                            <div className="text">СКРИПТОНИТ</div>
                        </div>
                        <div className="rows">
                            <img
                                className="rows-img"
                                src={jizus_img}
                            />
                            <div className="text">ДЖИЗУС</div>
                        </div>
                    </div>
                    <div className="rows1">
                        <div className="rows">
                            <img
                                className="rows-img"
                                src={oversize_img}
                            />
                            <div className="text">ЛСП</div>
                        </div>
                        <div className="rows">
                            <img
                                className="rows-img"
                                src={molchi_img}
                            />
                            <div className="text">СКРИПТОНИТ</div>
                        </div>
                        <div className="rows">
                            <img
                                className="rows-img"
                                src={fool_img}
                            />
                            <div className="text">ДЖИЗУС</div>
                        </div>
                    </div>
                    <div className="rows1">
                        <div className="rows">
                            <img
                                className="rows-img"
                                src={my_name_lida_img}
                            />
                            <div className="text">ЛСП</div>
                        </div>
                        <div className="rows">
                            <img
                                className="rows-img"
                                src={mudblood_img}
                            />
                            <div className="text">СКРИПТОНИТ</div>
                        </div>
                        <div className="rows">
                            <img
                                className="rows-img"
                                src={hattori_img}
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