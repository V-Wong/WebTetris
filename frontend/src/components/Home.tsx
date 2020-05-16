import React from "react";
import {Container, Row, Col, Card} from "react-bootstrap";

import Game from "./Game";

export default class Home extends React.Component {
  render() {
    return (
      <Container style={{marginTop: "5vh"}}>
        <Row>
          <Col sm={6}>
            <Game/>
          </Col>
          <Col sm={6}>
          <Card>
              <Card.Header>Tetris Clone - Game Description</Card.Header>
              <Card.Body>
                <Card.Title>Instructions</Card.Title> 
                <Card.Text>
                  Each completely filled row will be cleared and points will be awarded. <br/>
                  Fill multiple rows with a single piece to multiply the points gain. <br/>
                  The game is over once any of your Tetrominos fill the top row. <br/>
                  The goal is to play for as long as possible and score the most points. <br/>
                </Card.Text>
                <Card.Title>Controls</Card.Title>
                <Card.Text>
                  <b>Left, Down, Right:</b> move the Tetromino. <br/>
                  <b>Up:</b> rotate the Tetromino. <br/>
                  <b>Space:</b> Fast drop the Tetromino. <br/> 
                  <b>Shift:</b> Hold the Tetromino. <br/>
                  <b>Escape:</b> Pause the game.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card style={{marginTop: "1vh"}}>
              <Card.Header>High Scores</Card.Header>
              <Card.Body>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
