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

  moveTetromino(keyCode) {
    const grid = this.state.grid;

    for (let block of this.state.activeTetromino.blocks) {
      grid[block[1]][block[0]].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    }

    if (keyCode === 37) {
      if (!this.detectCollision(this.state.activeTetromino, -1, 0))
        this.state.activeTetromino.updatePosition(-1, 0);
    } else if (keyCode === 39) {
      if (!this.detectCollision(this.state.activeTetromino, 1, 0))
        this.state.activeTetromino.updatePosition(1, 0);
    } else if (keyCode === 40) {
      if (!this.detectCollision(this.state.activeTetromino, 0, 1))
        this.state.activeTetromino.updatePosition(0, 1);
    }
  }

  drawTetromino(tetromino) {
    const grid = this.state.grid;
    for (let block of tetromino.blocks) {
      grid[block[1]][block[0]].style.backgroundColor = "red";
    }
    this.setState({grid: grid});
  }

  detectCollision(tetromino, dx, dy) {
    for (let block of tetromino.blocks) {
      if (!(0 <= block[0] + dx && block[0] + dx < 10) ||
          !(0 <= block[1] + dy && block[1] + dy < 20)) {
        return true;
      }
    }
    return false;
  }

  componentDidMount() {
    const gameContainer = document.getElementById("main-game");
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 10; j++) {
        gameContainer.appendChild(this.state.grid[i][j]);
      }
    }

    if (!this.state.activeTetromino) this.setState({activeTetromino: new Square()})

    window.addEventListener("keydown", event => {
      this.moveTetromino(event.keyCode);
      this.drawTetromino(this.state.activeTetromino);
    })

    setInterval(() => {
      const grid = this.state.grid;
      for (let block of this.state.activeTetromino.blocks) {
        grid[block[1]][block[0]].style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      }
      this.state.activeTetromino.updatePosition(0, 1);
      this.drawTetromino(this.state.activeTetromino);
    }, 1000);
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