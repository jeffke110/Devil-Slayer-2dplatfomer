/*
the tile map class for level one (drawing and setting up)
*/

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
            "                                                                                                                                                                      ",
            "                                   s       lbbbr                             lbr                  s     lr          s  s  s          s          lr                 lbbr       D",
            "                    ",
            "                                               e                           e                       e                   e               e",
            "                                                                                                                                                                              ",
            " dggggggggggggggggggggggggggggggggggggggggggggggggggggggggga    dgggggggggggggggggga    dggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggga", //ground
            "                    ",
        ];
        this.x = player.position.x;
        this.y = player.position.y;
        this.position = new p5.Vector(this.x, 0);
    }
    initializeTileMap() {
        for (var i = 0; i < this.tilemap.length; i++) {
            for (var j = 0; j < this.tilemap[i].length; j++) {
                if (this.tilemap[i][j] == 'b') {
                    blocks.push(new lvl_one_block_class(j * 20, i * 20));
                }
                if (this.tilemap[i][j] == 'l') {
                    blocks.push(new lvl_one_block_class(j * 20, i * 20));
                    blocks[blocks.length-1].left_ledge = true;
                }
                if (this.tilemap[i][j] == 'r') {
                    blocks.push(new lvl_one_block_class(j * 20, i * 20));
                    blocks[blocks.length-1].right_ledge = true;
                }
                if (this.tilemap[i][j] == 's') {
                    blocks.push(new lvl_one_block_class(j * 20, i * 20));
                    blocks[blocks.length-1].single_block = true;
                }
                if (this.tilemap[i][j] == 'g') {
                    grounds.push(new lvl_one_ground_class(j * 20, 355));
                }
                if (this.tilemap[i][j] == 'a') {
                    grounds.push(new lvl_one_ground_class(j * 20, 355));
                    grounds[grounds.length-1].right_ledge = true;
                }
                if (this.tilemap[i][j] == 'd') {
                    grounds.push(new lvl_one_ground_class(j * 20, 355));
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
                    lvl_one_blockObj.draw(j * 20, i * 20);
                }
                if (this.tilemap[i][j] == 'g' || this.tilemap[i][j] == 'd' || this.tilemap[i][j] == 'a') {
                    lvl_one_groundObj.draw(j * 20, 355);
                }
                if (this.tilemap[i][j] == 'D'){
                    lvl_one_door_obj.draw(j*20, i * 20);
                }
            }
        }
    }
}
var blocks = [];
var lvl_one_blockObj;
var grounds = [];
var lvl_one_groundObj;

var tilemap_lvl_one;
function setup_lvl_one_tilemap() {
    lvl_one_blockObj = new lvl_one_block_class(1000, 1000);
    lvl_one_groundObj = new lvl_one_ground_class(1000, 1000);
    lvl_one_door_obj = new door(1000, 1000);
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