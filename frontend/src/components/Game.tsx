import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import {Square, Line, T, L, J} from "./game-logic/Tetrominos";

import "./game.css";

const GRID_SIZE = 20;
const TETROMINOS = [J, Square, Line, T, L, J];
const DEFAULT_GRID_COLOUR = "rgba(255, 255, 255, 0.8)"

export default class Game extends React.Component<any, any> {
  constructor(props) {
      super(props);

      const grid = [];
      for (let i = 0; i < 20; i++) {
        grid[i] = [];
        for (let j = 0; j < 10; j++) {
          grid[i][j] = document.createElement("div");
          grid[i][j].classList.add("cell");
          grid[i][j].style.backgroundColor = DEFAULT_GRID_COLOUR;
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
      grid[block[1]][block[0]].style.backgroundColor = DEFAULT_GRID_COLOUR;
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

  rotateTetromino() {
    const copyTetromino = JSON.parse(JSON.stringify(this.state.activeTetromino));
    copyTetromino.rotate = this.state.activeTetromino.rotate;
    copyTetromino.rotate();
    if (!this.detectCollision(copyTetromino, 0, 0)) {
      const grid = this.state.grid;
      for (let block of this.state.activeTetromino.blocks) {
        grid[block[1]][block[0]].style.backgroundColor = DEFAULT_GRID_COLOUR;
      }
  
      this.state.activeTetromino.rotate();
    }
  }

  drawTetromino(tetromino) {
    const grid = this.state.grid;
    for (let block of tetromino.blocks) {
      grid[block[1]][block[0]].style.backgroundColor = tetromino.colour;
    }
    this.setState({grid: grid});
  }

  detectCollision(tetromino, dx, dy) {
    for (let block of tetromino.blocks) {
      if (!(0 <= block[0] + dx && block[0] + dx < 10) ||
          !(0 <= block[1] + dy && block[1] + dy < 20) ||
          this.state.grid[block[1] + dy][block[0] + dx].storeBlock) {
        return true;
      }
    }
    return false;
  }

  detectCompleteRow() {
    if (this.state.grid[19].every(x => x.storeBlock)) {
      this.clearRow();
    }
  }

  clearRow() {
    for (let i = 18; i >= 0; i--) {
      for (let j = 0; j < 10; j++) {
        this.state.grid[i + 1][j].style.backgroundColor = 
            this.state.grid[i][j].style.backgroundColor;
        this.state.grid[i + 1][j].storeBlock = 
            this.state.grid[i][j].storeBlock;
      }
    }
  }

  componentDidMount() {
    const gameContainer = document.getElementById("main-game");
    for (let i = 0; i < 20; i++) {
      for (let j = 0; j < 10; j++) {
        gameContainer.appendChild(this.state.grid[i][j]);
      }
    }

    const randomTetromino = TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];
    if (!this.state.activeTetromino) this.setState({activeTetromino: new randomTetromino()})

    window.addEventListener("keydown", event => {
      if (event.keyCode === 38) this.rotateTetromino();
      this.moveTetromino(event.keyCode);
      this.drawTetromino(this.state.activeTetromino);
    })

    setInterval(() => {
      const grid = this.state.grid;
      if (!this.detectCollision(this.state.activeTetromino, 0, 1)) {
        for (let block of this.state.activeTetromino.blocks) {
          grid[block[1]][block[0]].style.backgroundColor = DEFAULT_GRID_COLOUR;
        }
        //this.state.activeTetromino.updatePosition(0, 1);
      } else {
        for (let block of this.state.activeTetromino.blocks) {
          grid[block[1]][block[0]].storeBlock = true;
        }
        const randomTetromino = TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];
        this.setState({activeTetromino: new randomTetromino()});
      }
      this.drawTetromino(this.state.activeTetromino);
      this.detectCompleteRow();
    }, 100);
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