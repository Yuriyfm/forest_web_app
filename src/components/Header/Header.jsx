import React from "react";
import s from './Header.module.css'
import {Button, Col, Row, Nav} from "react-bootstrap";

const Header = () => {
    return (
        <div className={s.header}>
        <nav className="navbar navbar-expand-lg justify-content-center navbar-light bg-success">
            <a className="navbar-brand" href="#">Forest App</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                </ul>
            <div>
                <Button as={Col} variant="primary">Войти</Button>
            </div>
        </nav>
        </div>
    )
}


export default Header;