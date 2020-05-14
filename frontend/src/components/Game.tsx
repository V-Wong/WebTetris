import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import {Square} from "./game-logic/Tetrominos";

import "./game.css";

const GRID_SIZE = 20;

export default class Game extends React.Component<any, any> {
  constructor(props) {
      super(props);

      const grid = [];
      for (let i = 0; i < 20; i++) {
        grid[i] = [];
        for (let j = 0; j < 10; j++) {
          grid[i][j] = document.createElement("div");
          grid[i][j].classList.add("cell");
        }
      }

      this.state = {
        grid: grid,
        activeTetromino: null
      } 
  }

  drawTetromino(tetromino) {
    const grid = this.state.grid;
    for (let block of tetromino.blocks) {
      grid[block[1]][block[0]].style.backgroundColor = "red";
    }
    this.setState({grid: grid});
  }

  componentDidMount() {
    const gameContainer = document.getElementById("main-game");
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 10; j++) {
        gameContainer.appendChild(this.state.grid[i][j]);
      }
    }

    if (!this.state.activeTetromino) this.setState({activeTetromino: new Square()})

    window.addEventListener("keydown", () => {
      this.drawTetromino(this.state.activeTetromino);
      this.state.activeTetromino.updatePosition(0, 1);
    })
  }

  render() {
    return (
      <Container style={{marginTop: "5vh"}}>
        <Row>
          <Col sm={8}>
            <div id="main-game">
            </div>
          </Col>
          <Col sm={4}>
            <div>T</div>
          </Col>
        </Row>
      </Container>
    );
  }
}