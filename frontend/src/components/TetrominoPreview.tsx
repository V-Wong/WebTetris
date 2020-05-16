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

    for (let row of this.state.grid) {
      for (let cell of row) {
        cell.style.backgroundColor = DEFAULT_GRID_COLOUR;
      }
    }

    let lastEnd = 0;
    for (let tetromino of this.props.rotation) {
      const piece = new tetromino();

      if (piece.constructor.name === "Line") {
        piece.rotate();
      }

      for (let block of piece.blocks) {
        while (block[0] > 3) piece.updatePosition(-1, 0);
        while (lastEnd && block[1] < lastEnd + 3) piece.updatePosition(0, 1);
      }

      this.drawTetromino(piece);
      lastEnd = Math.max(...piece.blocks.map(x => x[1]));
    }
  }

  componentDidMount() {
    const previewContainer = document.getElementById("tetromino-preview");
    for (let row of this.state.grid) {
      for (let cell of row) {
        previewContainer.appendChild(cell);
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