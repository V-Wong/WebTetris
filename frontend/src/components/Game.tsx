import React from 'react';
import {Container, Row, Col, Card} from "react-bootstrap";

import TetrominoPreview from "./TetrominoPreview";
import {Tetromino, Square, Line, T, L, J} from "./game-logic/Tetrominos";

import "./game.css";

const GRID_HEIGHT = 20;
const GRID_WIDTH = 10;
const TETROMINOS = [J, Square, Line, T, L, J];
const DEFAULT_GRID_COLOUR = "grey"

function getRandomTetromino() {
  return TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];
}

export default class Game extends React.Component<any, any> {
  constructor(props) {
      super(props);

      const grid = [];
      for (let i = 0; i < GRID_HEIGHT; i++) {
        grid[i] = [];
        for (let j = 0; j < GRID_WIDTH; j++) {
          grid[i][j] = document.createElement("div");
          grid[i][j].classList.add("cell");
          grid[i][j].style.backgroundColor = DEFAULT_GRID_COLOUR;
        }
      }

      const randomTetromino = getRandomTetromino();

      const tetrominoRotation = [];
      for (let i = 0; i < 5; i++) 
        tetrominoRotation.push(getRandomTetromino());

      this.state = {
        grid: grid,
        activeTetromino: new randomTetromino(),
        tetrominoRotation: tetrominoRotation
      } 
  }

  moveTetromino(keyCode: number) {
    for (let block of this.state.activeTetromino.blocks) {
      this.state.grid[block[1]][block[0]].style.backgroundColor = DEFAULT_GRID_COLOUR;
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

  drawTetromino(tetromino: Tetromino) {
    for (let block of tetromino.blocks) {
      this.state.grid[block[1]][block[0]].style.backgroundColor = tetromino.colour;
    }
  }

  detectCollision(tetromino: Tetromino, dx: number, dy: number) {
    for (let block of tetromino.blocks) {
      if (!(0 <= block[0] + dx && block[0] + dx < GRID_WIDTH) ||
          !(0 <= block[1] + dy && block[1] + dy < GRID_HEIGHT) ||
          this.state.grid[block[1] + dy][block[0] + dx].storeBlock) {
        return true;
      }
    }
    return false;
  }

  getCompleteRows() {
    const completeRows = [];
    for (let i in this.state.grid) {
      if (this.state.grid[i].every(x => x.storeBlock)) {
        completeRows.push(i);
      }
    }
    return completeRows;
  }

  clearRow(rowNum: number) {
    for (let i = rowNum - 1; i >= 0; i--) {
      for (let j in this.state.grid[i]) {
        this.state.grid[i + 1][j].style.backgroundColor = 
            this.state.grid[i][j].style.backgroundColor;
        this.state.grid[i + 1][j].storeBlock = 
            this.state.grid[i][j].storeBlock;
      }
    }
  }

  autoDropTetromino() {
    for (let block of this.state.activeTetromino.blocks) {
      this.state.grid[block[1]][block[0]].style.backgroundColor = DEFAULT_GRID_COLOUR;
    }
    this.state.activeTetromino.updatePosition(0, 1);
  }

  storeBlock() {
    for (let block of this.state.activeTetromino.blocks) {
      this.state.grid[block[1]][block[0]].storeBlock = true;
    }
  }

  detectLose() {
    return this.state.grid[0].some(x => x.storeBlock)
  }

  runGame() {
    if (!this.detectCollision(this.state.activeTetromino, 0, 1)) {
      this.autoDropTetromino();
    } else {
      this.storeBlock();
      const tetrominoRotation = this.state.tetrominoRotation;
      const randomTetromino = tetrominoRotation.shift();
      tetrominoRotation.push(getRandomTetromino());
      this.setState({activeTetromino: new randomTetromino(),
                     tetrominoRotation: tetrominoRotation});
    }
    this.drawTetromino(this.state.activeTetromino);
    for (let row of this.getCompleteRows()) this.clearRow(row);
    if (this.detectLose()) alert("You lose");
  }

  componentDidMount() {
    const gameContainer = document.getElementById("main-game");
    for (let row of this.state.grid) {
      for (let cell of row) {
        gameContainer.appendChild(cell);
      }
    }

    window.addEventListener("keydown", event => {
      if (event.keyCode === 38) this.rotateTetromino();
      this.moveTetromino(event.keyCode);
      this.drawTetromino(this.state.activeTetromino);
    })

    setInterval(() => {
      this.runGame();
    }, 100);
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={7}>
            <div id="main-game"/>
          </Col>
          <Col sm={5}>
            <TetrominoPreview rotation={this.state.tetrominoRotation}/>
          </Col>
        </Row>
      </Container>
    );
  }
}