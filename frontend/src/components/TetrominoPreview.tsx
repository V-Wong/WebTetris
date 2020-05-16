import React from "react";

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
          grid: grid,
          activeTetromino: null
        } 
    }

    componentDidMount() {
        const previewContainer = document.getElementById("tetromino-preview");
        for (let i = 0; i < GRID_HEIGHT; i++) {
          for (let j = 0; j < 4; j++) {
            previewContainer.appendChild(this.state.grid[i][j]);
          }
        }
    }

    render() {
        return (<div id="tetromino-preview"></div>)
    }
}