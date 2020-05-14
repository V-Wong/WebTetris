import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import {Square} from "./game-logic/Tetrominos";

import "./game.css";

const GRID_SIZE = 20;

export default class Game extends React.Component {
  constructor(props) {
      super(props);
  }

  drawSquare(x: number, y: number) {
    const canvas = document.getElementById("main-game");
    const ctx = (canvas as any).getContext("2d") as any;

    ctx.beginPath();
    ctx.lineWidth = "1";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "red";
    ctx.rect(GRID_SIZE * x, GRID_SIZE * y, GRID_SIZE - 1, GRID_SIZE - 1);
    ctx.fill();
    ctx.rect(GRID_SIZE * x, GRID_SIZE * y, GRID_SIZE, GRID_SIZE);
    ctx.stroke();
  }

  drawTetromino(tetromino) {
    for (let block of tetromino.blocks) {
      this.drawSquare(block[0], block[1]);
    }
  }

  componentDidMount() {
    window.addEventListener("keydown", () => {
      this.drawTetromino(new Square());
    });
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