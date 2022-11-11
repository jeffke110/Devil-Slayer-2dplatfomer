class lvl_one_tilemap {
    constructor() {
        this.tilemap = [
            "                     ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                                                                                  e   e                                ",
            "                    ", 
            "                                             s                                 lbbbbbbr    lbbr                        s                 lr    lbbr                    ",
            "                    ",      
            "                                                                                                                       e                        e",
            "                                                                                                                                                                      t",
            "                                   s       lbbbr                             lbr                  s     lr          s  s  s          s          lr                 lbbr",
            "                    ",
            "                                               e                           e                       e                   e               e",
            "                               ",
            " gggggggggggggggggggggggggggggggggggggggggggggggggggggggggga    dgggggggggggggggggga    dgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg", //ground
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
                if (this.tilemap[i][j] == 'l') {
                    blocks.push(new block(j * 20, i * 20));
                    blocks[blocks.length-1].left_ledge = true;
                }
                if (this.tilemap[i][j] == 'r') {
                    blocks.push(new block(j * 20, i * 20));
                    blocks[blocks.length-1].right_ledge = true;
                }
                if (this.tilemap[i][j] == 's') {
                    blocks.push(new block(j * 20, i * 20));
                    blocks[blocks.length-1].single_block = true;
                }
                if (this.tilemap[i][j] == 'g') {
                    grounds.push(new ground(j * 20, 355));
                }
                if (this.tilemap[i][j] == 'a') {
                    grounds.push(new ground(j * 20, 355));
                    grounds[grounds.length-1].right_ledge = true;
                }
                if (this.tilemap[i][j] == 'd') {
                    grounds.push(new ground(j * 20, 355));
                    grounds[grounds.length-1].left_ledge = true;
                }
                if (this.tilemap[i][j] == 'e') {
                    lvl_one_enemies.push(new lvl_one_enemy(j * 20,  i * 20));
                }
            }
        }
    }
    drawTileMap() {
        for (var i = 0; i < this.tilemap.length; i++) {
            for (var j = 0; j < this.tilemap[i].length; j++) {
                if (this.tilemap[i][j] == 'b' || this.tilemap[i][j] == 's' || this.tilemap[i][j] == 'l' || this.tilemap[i][j] == 'r') {
                    blockObj.draw(j * 20, i * 20);
                }
                if (this.tilemap[i][j] == 'g' || this.tilemap[i][j] == 'd' || this.tilemap[i][j] == 'a') {
                    groundObj.draw(j * 20, 355);
                }
                if (this.tilemap[i][j] == 't') {
                    text("end of level one", j * 20,  i * 20)
                }
            }
        }
    }
}
var tilemap_lvl_one;
var walkForce, backForce;

function setup_tilemap() {
    blockObj = new block(1000, 1000);
    groundObj = new ground(1000, 1000);
    tilemap_lvl_one = new lvl_one_tilemap();
    tilemap_lvl_one.initializeTileMap();
}

function lvl_one_tilemap_draw() {
    push();
    translate(-tilemap_lvl_one.position.x, 0);
    tilemap_lvl_one.drawTileMap();
    draw_lvl_one_enemy_movement();
    pop();
    load_player_movement_gif();
    player_movement_function();
}