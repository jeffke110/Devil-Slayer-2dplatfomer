class lvl_one_tilemap {
    constructor() {
        this.tilemap = [
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                     ",
            "                 ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                  bbb  ",
            "                    ",
            "                    ",
        ];
        this.x = player.position.x;
        this.y = player.position.y;
        this.position = new p5.Vector(this.x, 0);

    }
    applyForce(force) {
        this.acceleration.add(force);
    }
    initializeTileMap() {
        for (var i = 0; i < this.tilemap.length; i++) {
            for (var j = 0; j < this.tilemap[i].length; j++) {
                if (this.tilemap[i][j] == 'b') {
                    blocks.push(new block(j * 20, i * 20));
                }
            }
        }
    }
    drawTileMap() {
        for (var i = 0; i < this.tilemap.length; i++) {
            for (var j = 0; j < this.tilemap[i].length; j++) {
                if (this.tilemap[i][j] == 'b') {
                    blockObj.draw(j * 20, i * 20);
                }
            }
        }
    }
}
function setup_tilemap() {
    tilemap_lvl_one = new lvl_one_tilemap();
    tilemap_lvl_one.initializeTileMap();
}

var beforeJump = false;
var jumpDifference = 0;

function lvl_one_tilemap_draw() {

    push();
    translate(player.position.x, 0);
    tilemap_lvl_one.drawTileMap();
    load_ground();
    pop();

    load_player_movement_gif();
    player_movement_function();
}