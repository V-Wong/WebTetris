import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import "./game.css";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <Container style={{marginTop: "5vh"}}>
          <Row>
            <Col sm={8}>
              <canvas id="main-game"/>
            </Col>
            <Col sm={4}>
              <div>T</div>
            </Col>
          </Row>
        </Container>
      );
  }
}