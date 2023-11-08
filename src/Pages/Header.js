//Библиотеки
import React, {Component} from "react";
import { Button, Container, FormControl, Navbar, Nav, Form } from "react-bootstrap";
import {BrowserRouter as Router, Routes , Route, Link, element} from "react-router-dom";
//CSS файл
import './Header.css'
//Картинки
import logo from '../Components/Pictures/logo.png';
import search_icon from '../Components/Pictures//search.png'
import avatar from '../Components/Pictures//avatar.svg'
//Страницы
import Home from '../Pages/Home';
import TopCharts from '../Pages/TopCharts';
import New from '../Pages/New';
import Genre from '../Pages/Genre';
import Favorite from '../Pages/Favorite';
import Account from '../Pages/Account';
import Login from "./Login";
import Registration from "../Pages/Registration";

export default class Header extends Component {
    render() {
        return (
        <>
            <Navbar fixed="top" collapseOnSelect expand='xl' bg="light" variant="light" >
                <div class="container-fluid">
                    <Navbar.Brand href="/">
                        <td className='rectangle'>
                            <img
                                src={logo}
                                height='40'
                                width='40'
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </td>
                        <td><a className="navbar-brand txtstyle"> Sound music </a></td>
                    </Navbar.Brand>
                    <a id="partner">Официальный партнер <br /> г.Омск</a>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto container px-5">
                            <Nav.Link className="navlink" href="/new"> Новинки </Nav.Link>
                            <Nav.Link className="navlink" href="/topcharts"> Топ чартов </Nav.Link>
                            <Nav.Link className="navlink" href="/genre"> Жанры </Nav.Link>
                            <Nav.Link className="navlink" href="/favorite"> Мой плейлист </Nav.Link>
                        </Nav>
                        <Form className='d-flex' >
                            <input
                                type="text"
                                className="search-txtbox"
                            />
                            <Button id="searchbutton" className="search-txtbox"> 
                                <img
                                    src={search_icon}
                                    height='25'
                                    width='25'
                                    alt="Search"
                                 />
                            </Button>
                            <Button className="login" href="/register">
                            <img
                                id='account-icon'
                                className="clicked-icons"
                                src={avatar}
                                height='36px'
                                width='36px'
                                alt="Account"
                             />
                            </Button>
                            
                        </Form>
                    </Navbar.Collapse>
                </div>
            </Navbar>

            <Router>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/new' element={<Home />} />
                    <Route exact path='/topcharts' element={<TopCharts />} />
                    <Route exact path='/genre' element={<Genre />} />
                    <Route exact path='/favorite' element={<Favorite />} />
                    <Route exact path='/account' element={<Account />} />
                    <Route exact path='/register' element={<Registration />} />
                    <Route exact path='/login' element={<Login />} />
                </Routes>
            </Router>
        </>
        )
    }
}