import React from 'react';
import {Navbar, Nav} from "react-bootstrap";

export default class NavigationBar extends React.Component {
    render() {
        return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>Study Helper</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
            </Nav>
        </Navbar>
        )
    }
}