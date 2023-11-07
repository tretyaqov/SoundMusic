import React, { Component } from "react"
import './Login.css'
import {Container, Form, Button} from 'react-bootstrap'
import picture from '../Components/Pictures/fon.png'


export default class Login extends Component {
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
                <div><h1 className="reg_form">Вход</h1></div>
                <Form>
                <div class="fonreg" id="fonreg"></div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label
                            className="login-text">
                            Логин:
                        </Form.Label>
                        <Form.Control
                            className="login-textbox"
                            type="email"
                            placeholder="example@mail.com" 
                        />
                        <Form.Label
                            className="password-text">
                            Пароль:
                        </Form.Label>
                        <Form.Control
                            className="password-textbox"
                            type="password"
                            placeholder="********" 
                        />
                        <Button
                            className="button"
                            variant="primary"
                            type="submit"
                            //href="/login"//поменять на POST-запрос в базу данных на загрузку нового пользователя
                            >Войти
                        </Button>
                    </Form.Group>
                </Form>
                <div><a href="/register" className="register-link">Ещё не зарегистрированы?</a></div>
            </Container>
            </div>
        )
    }
}
