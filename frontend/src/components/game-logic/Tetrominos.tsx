class Tetromino {
    blocks: Array<Array<number>>;
    rotation: number;
    constructor() {
        this.blocks = [];
    }

    updatePosition(dx: number, dy: number) {
        for (let block of this.blocks) {
            block[0] += dx;
            block[1] += dy;
        }
    }
}

class Square extends Tetromino {
    constructor() {
        super();
        this.blocks = [[6, 0], [6, 1], [7, 0], [7, 1]];
    }
}

class Line extends Tetromino {
    constructor() {
        super();
        this.blocks = [[6, 0], [6, 1], [6, 2], [6, 3]];
        this.rotation = 0;
    }

    rotate() {
        if (this.rotation % 4 === 0) {
            const y = this.blocks[3][1]

            let i = -1
            for (let block of this.blocks) {
                block[0] = block[0] + i;
                block[1] = y;
                i += 1;
            }
        } else if (this.rotation % 4 === 1) {
            const x = this.blocks[2][0];

            let i = -3
            for (let block of this.blocks) {
                block[0] = x;
                block[1] = block[1] + i;
                i += 1;
            }
        } else if (this.rotation % 4 === 2) {
            const y = this.blocks[3][1];

            let i = -2
            for (let block of this.blocks) {
                block[0] = block[0] + i;
                block[1] = y;
                i += 1;
            } 
        } else {
            const x = this.blocks[1][0];

            let i = -3;
            for (let block of this.blocks) {
                block[0] = x;
                block[1] = block[1] + i;
                i += 1
            }
        }

        this.rotation += 1
    }
}

export {Square, Line};