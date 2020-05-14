class Tetromino {
    blocks: Array<Array<number>>;
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

export {Square};