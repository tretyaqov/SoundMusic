import React, { Component } from "react";
import {Button} from "react-bootstrap"
import './Favorite.css';
import shareIcon from '../Components/Pictures/share-icon.png';

export default class Favorite extends Component {
    render() {
        return (
            <div>
                <div className="user-block-favorite">
                    <img 
                        className="user-avatar-image-favorite"
                        src="https://via.placeholder.com/250x250"
                    />
                    <div className="user-text-block-favorite">
                        <p className='user-flag-text'>Пользователь</p>
                        <p className="user-fullname-text">USER_FULL_NAME</p>
                    </div>
                </div>
                <div className="line-favorite" />

                <div className="playlist-block-favorite">
                    <img 
                        className="user-playlist-image-favorite"
                        src="https://via.placeholder.com/310x310"
                    />
                    <div className="user-text-block-favorite">
                        <p className="user-fullname-text">USER_PLAYLIST</p>
                        <div>
                            <Button className="listen-button-favorite">Слушать</Button>
                            <Button className="share-button-favorite"><img className="share-icon-favorite" src={shareIcon} /></Button>
                        </div>
                    </div>
                    <div className="block-music-triple-favorite">
                        <div className="block-music-favorite">
                            <img 
                                className="music-picture-favorite"
                                src='https://via.placeholder.com/80x80'
                            />
                            <p className="music-name-favorite">MUSIC_NAME</p>
                        </div>
                        <div className="block-music-favorite">
                            <img 
                                className="music-picture-favorite"
                                src='https://via.placeholder.com/80x80'
                            />
                            <p className="music-name-favorite">MUSIC_NAME</p>
                        </div>
                        <div className="block-music-favorite">
                            <img 
                                className="music-picture-favorite"
                                src='https://via.placeholder.com/80x80'
                            />
                            <p className="music-name-favorite">MUSIC_NAME</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}