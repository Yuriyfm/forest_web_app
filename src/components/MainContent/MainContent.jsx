import React from "react";
import {NavLink} from "react-router-dom";
import {Button, Col, Row, Nav} from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import * as axios from 'axios'

export default class MainContent extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        let token = ''

        const config = {
            headers: { 'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': "*"}
        };

        const bodyParameters = {
            key: "value"
        };

        axios.get(`https://delana.llzp.ru:3000/api/v1/complexes/`,
        bodyParameters,
        config)
            .then(console.log).catch(console.log);
            // .then(res => {
            //     const complexes = res.data;
            //     this.setState({ complexes });
        }
    debugger;
    render() {
        return (
            <ul>
                { this.state.persons.map(person => <li>{person.name}</li>)}
            </ul>
        )
    }
}
