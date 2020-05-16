import React from "react";

import {Tetromino} from "./game-logic/Tetrominos";

const GRID_HEIGHT = 20;
const DEFAULT_GRID_COLOUR = "grey";

export default class TetrominoPreview extends React.Component<any, any> {
  constructor(props) {
    super(props);

    const grid = [];
    for (let i = 0; i < GRID_HEIGHT; i++) {
      grid[i] = [];
      for (let j = 0; j < 4; j++) {
        grid[i][j] = document.createElement("div");
        grid[i][j].classList.add("cell");
        grid[i][j].style.backgroundColor = DEFAULT_GRID_COLOUR;
      }
    }

    this.state = {
      grid: grid
    } 
  }

  drawTetromino(tetromino: Tetromino) {
    console.log(tetromino);
    for (let block of tetromino.blocks) {
      this.state.grid[block[1]][block[0]].style.backgroundColor = tetromino.colour;
    }
  }

  drawRotation() {
    if (!this.props.rotation) return;

    for (let i = 0; i < GRID_HEIGHT; i++) {
      for (let j = 0; j < 4; j++) {
        this.state.grid[i][j].style.backgroundColor = DEFAULT_GRID_COLOUR;
      }
    }

    let index = 0;
    for (let tetromino of this.props.rotation) {
      const piece = new tetromino();
      for (let block of piece.blocks) {
        while (block[0] > 3) piece.updatePosition(-1, 0);
        piece.updatePosition(0, index);
      }

      this.drawTetromino(piece);
      index += 1;
    }
  }

  componentDidMount() {
    const previewContainer = document.getElementById("tetromino-preview");
    for (let i = 0; i < GRID_HEIGHT; i++) {
      for (let j = 0; j < 4; j++) {
        previewContainer.appendChild(this.state.grid[i][j]);
      }
    }
    this.drawRotation();
  }

  componentDidUpdate() {
    this.drawRotation();
  }

  render() {
    return (
      <div id="tetromino-preview"></div>
    )
  }
}