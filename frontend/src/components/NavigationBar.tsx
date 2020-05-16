import React from 'react';
import {Navbar, Nav} from "react-bootstrap";

export default class NavigationBar extends React.Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Tetris Clone</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="https://github.com/V-Wong/WebTetris">Source Code</Nav.Link>
                <Nav.Link href="https://vwong.dev">Other Projects</Nav.Link>
            </Nav>
        </Navbar>
        )
    }
}