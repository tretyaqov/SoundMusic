import React, { Component } from "react"
import './Registration.css'
import {Container, Form, Button} from 'react-bootstrap'
import picture from '../Components/Pictures/fon.png'


export default class Registration extends Component {
    render() {
        return (
            <div class="body_container">
            <div class="fon">
                <img
                    src={picture}
                    height="100%"
                    width="100%"
                    className="d-inline-block align-top"
                    alt="picture"
                />
            </div>
            <Container className="centered">
                <div className="box"/>
                <div><h1 className="reg_form">Присоединяйся</h1></div>
                <Form>
                <div class="fonreg" id="fonreg"></div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label
                            className="name1">
                            Введите имя пользователя:
                        </Form.Label>
                        <Form.Control
                            className="name2"
                            type="name"
                            placeholder="Владислав" 
                        />
                        <Form.Label
                            className="address1">
                            Введите адрес электронной почты:
                        </Form.Label>
                        <Form.Control
                            className="address2"
                            type="email"
                            placeholder="vlad@mail.ru" 
                        />
                        <Form.Label
                            className="password1">
                            Придумайте пароль:
                        </Form.Label>
                        <Form.Control
                            className="password2"
                            type="password"
                            placeholder="12345" 
                        />
                        <Button
                            className="button"
                            variant="primary"
                            type="submit"
                            //href="/login"//поменять на POST-запрос в базу данных на загрузку нового пользователя
                            >Зарегистрироваться
                        </Button>
                    </Form.Group>
                </Form>
                <div><a href="/login" className="login-link">Уже есть аккаунт?</a></div>
            </Container>
            </div>
        )
    }
}
