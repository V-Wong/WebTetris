class Tetromino {
    blocks: Array<Array<number>>;
    rotation: number;
    colour: string;

    updatePosition(dx: number, dy: number) {
        for (let block of this.blocks) {
            block[0] += dx;
            block[1] += dy;
        }
    }

    rotate() {
        return null;
    }
}

class Square extends Tetromino {
    constructor() {
        super();
        this.blocks = [[6, 0], [6, 1], [7, 0], [7, 1]];
        this.colour = "red";
    }
}

class Line extends Tetromino {
    constructor() {
        super();
        this.blocks = [[6, 0], [6, 1], [6, 2], [6, 3]];
        this.rotation = 0;
        this.colour = "blue";
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

class T extends Tetromino {
    constructor() {
        super();
        this.blocks = [[6, 0], [7, 0], [8, 0], [7, 1]];
        this.rotation = 0;
        this.colour = "green";
    }

    rotate() {
        if (this.rotation % 4 == 0) {
            this.blocks[0] = [this.blocks[0][0] + 1, this.blocks[0][1] - 1]
            this.blocks[2] = [this.blocks[2][0] - 1, this.blocks[2][1] + 1]
            this.blocks[3] = [this.blocks[3][0] - 1, this.blocks[3][1] - 1]
        } else if (this.rotation % 4 == 1) {
            this.blocks[0] = [this.blocks[0][0] + 1, this.blocks[0][1] + 1]
            this.blocks[2] = [this.blocks[2][0] - 1, this.blocks[2][1] - 1]
            this.blocks[3] = [this.blocks[3][0] + 1, this.blocks[3][1] - 1]
        } else if (this.rotation % 4 == 2) {
            this.blocks[0] = [this.blocks[0][0] - 1, this.blocks[0][1] + 1]
            this.blocks[2] = [this.blocks[2][0] + 1, this.blocks[2][1] - 1]
            this.blocks[3] = [this.blocks[3][0] + 1, this.blocks[3][1] + 1]
        } else {
            this.blocks[0] = [this.blocks[0][0] - 1, this.blocks[0][1] - 1]
            this.blocks[2] = [this.blocks[2][0] + 1, this.blocks[2][1] + 1]
            this.blocks[3] = [this.blocks[3][0] - 1, this.blocks[3][1] + 1]
        }

        this.rotation += 1
    }
}

class L extends Tetromino {
    constructor() {
        super();
        this.blocks =  [[6, 0], [7, 0], [8, 0], [8, 1]];
        this.rotation = 0;
        this.colour = "yellow";
    }

    rotate() {
        const pivot = this.blocks[1];

        if (this.rotation % 4 == 0) {
            this.blocks[0] = [pivot[0], pivot[1] - 1]
            this.blocks[2] = [pivot[0] - 1, pivot[1] + 1]
            this.blocks[3] = [pivot[0], pivot[1] + 1]
        } else if (this.rotation % 4 == 1) {
            this.blocks[0] = [pivot[0] - 1, pivot[1]]
            this.blocks[2] = [pivot[0] - 1, pivot[1] - 1]
            this.blocks[3] = [pivot[0] + 1, pivot[1]]
        } else if (this.rotation % 4 == 2) {
            this.blocks[0] = [pivot[0] + 1, pivot[1] - 1]
            this.blocks[2] = [pivot[0], pivot[1] - 1]
            this.blocks[3] = [pivot[0], pivot[1] + 1]
        } else {
            this.blocks[0] = [pivot[0] + 1, pivot[1] + 1]
            this.blocks[2] = [pivot[0] - 1, pivot[1]]
            this.blocks[3] = [pivot[0] + 1, pivot[1]]
        }

        this.rotation += 1
    }
}

class J extends Tetromino {
    constructor() {
        super();
        this.blocks =  [[6, 0], [7, 0], [8, 0], [6, 1]];
        this.rotation = 0
        this.colour = "orange";
    }

    rotate() {
        const pivot = this.blocks[1];

        if (this.rotation % 4 == 0) {
            this.blocks[0] = [pivot[0], pivot[1] - 1]
            this.blocks[2] = [pivot[0] - 1, pivot[1] - 1]
            this.blocks[3] = [pivot[0], pivot[1] + 1]
        } else if (this.rotation % 4 == 1) {
            this.blocks[0] = [pivot[0] - 1, pivot[1]]
            this.blocks[2] = [pivot[0] + 1, pivot[1]]
            this.blocks[3] = [pivot[0] + 1, pivot[1] - 1]
        } else if (this.rotation % 4 == 2) {
            this.blocks[0] = [pivot[0], pivot[1] + 1]
            this.blocks[2] = [pivot[0], pivot[1] - 1]
            this.blocks[3] = [pivot[0] + 1, pivot[1] + 1]
        } else {
            this.blocks[0] = [pivot[0] - 1, pivot[1]]
            this.blocks[2] = [pivot[0] + 1, pivot[1]]
            this.blocks[3] = [pivot[0] - 1, pivot[1] + 1]
        }

        this.rotation += 1
    }
}

export {Square, Line, T, L, J};