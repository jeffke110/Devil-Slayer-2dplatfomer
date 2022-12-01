/*
class for the ghost from the final boss
*/
var boss_fire = function (x, y) {
    this.x = floor(x / 20);
    this.y = floor(y / 20);
    this.moving = false;
    this.nextX = 0;
    this.nextY = 0;
    this.pathIndex;
    this.pathDone = 0;

    this.cols = 30;
    this.rows = 20;
    this.grid = new Array(this.cols);
    this.openSet = [];
    this.closedSet = [];

    this.start;
    this.end;
    this.w = width / this.cols;
    this.h = height / this.rows;
    this.path = [];
    this.nosolution = false;

    this.death = false;
    this.health = 10;

    this.done = 0;
    this.startFollow = 0;
    this.currentPath = [];
    this.centerX = 0;
    this.centerY = 0;
}
//setup variables
boss_fire.prototype.setup = function () {
    for (var i = 0; i < this.cols; i++) {
        this.grid[i] = new Array(this.rows);
    }
    for (var i = 0; i < this.cols; i++) {
        for (var j = 0; j < this.rows; j++) {
            this.grid[i][j] = new Spot(i, j);
            //if (tilemap_lvl_three.tilemap[j][i] == 'b' || tilemap_lvl_three.tilemap[j][i] == 'l' || tilemap_lvl_three.tilemap[j][i] == 'r' || tilemap_lvl_three.tilemap[j][i] == 'g') {
            //    this.grid[i][j].wall = true;
            // }
        }
    }
    for (var i = 0; i < this.cols; i++) {
        for (var j = 0; j < this.rows; j++) {
            this.grid[i][j].addNeighbors(this.grid);
        }
    }
    this.start = this.grid[this.x][this.y];
    this.end = this.grid[floor(player.position.x / 20)][floor(player.position.y / 20)];
    this.start.wall = false;
    this.start.wall = false;
    this.openSet.push(this.start);
}

boss_fire.prototype.follow = function () {

    if (this.health <= 0) {
        this.death = true;
    }
    if (this.startFollow == 0 && this.pathIndex >= 0 && this.pathIndex < this.currentPath.length) {
        this.x = this.currentPath[this.pathIndex].i * 20;
        this.y = this.currentPath[this.pathIndex].j * 20;
        this.startFollow = 1;
    }
    if (this.pathIndex >= 0 && this.pathIndex < this.currentPath.length) {

        if (this.moving == false) {
            this.nextX = this.currentPath[this.pathIndex].i * 20;
            this.nextY = this.currentPath[this.pathIndex].j * 20;
            this.moving = true;
        }
        if (this.x == this.nextX && this.y == this.nextY) {
            this.pathIndex--;
            this.moving = false;
        }
        if (this.x < this.nextX) {
            this.x++;
        }
        if (this.x > this.nextX) {
            this.x--;
        }
        if (this.y < this.nextY) {
            this.y++;
        }
        if (this.y > this.nextY) {
            this.y--;
        }
    }
    if (this.pathIndex < 0) {
        this.reset();
        this.death = true;
    }
}
boss_fire.prototype.setPath = function (path) {
    if (this.pathDone == 0) {
        this.currentPath = path;
        this.pathIndex = path.length - 1;
        this.pathDone = 1;
    }
}
boss_fire.prototype.draw = function () {
    if (this.startFollow == 1) {
        image(ghost_img, this.x, this.y);
        stroke('red'); // Change the color
        strokeWeight(3); // Make the points 10 pixels in size
        text(this.health, this.x + 10, this.y);
        this.centerX = this.x + 20;
        this.centerY = this.y + 20;
    }
}

function Spot(i, j) {
    this.i = i;
    this.j = j;
    this.f = 0;
    this.g = 0;
    this.h = 0;
    this.previous = undefined;
    this.neighbors = [];
    this.wall = false;

    this.show = function (color) {
        fill(color);
        if (this.wall) {
            fill(0);
        }
        noStroke();
        rect(this.i * 20, this.j * 20, 20, 20);
    }
    this.addNeighbors = function (grid) {
        var i = this.i;
        var j = this.j;
        if (i < 30 - 1) {
            this.neighbors.push(grid[i + 1][j]);
        }
        if (i > 0) {
            this.neighbors.push(grid[i - 1][j]);
        }
        if (j < 20 - 1) {
            this.neighbors.push(grid[i][j + 1]);
        }
        if (j > 0) {
            this.neighbors.push(grid[i][j - 1]);
        }
        if (i > 0 && j > 0) {
            this.neighbors.push(grid[i - 1][j - 1]);
        }
        if (i < 30 - 1 && j > 0) {
            this.neighbors.push(grid[i + 1][j - 1]);
        }
        if (i > 0 && j < 20 - 1) {
            this.neighbors.push(grid[i - 1][j + 1]);
        }
        if (i < 30 - 1 && j < 20 - 1) {
            this.neighbors.push(grid[i + 1][j + 1]);
        }
    }
}