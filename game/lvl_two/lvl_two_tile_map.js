/*
level two tilemap class
*/
class lvl_two_tilemap{
    constructor(){
        this.tilemap = [
            "                     ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                    ",
            "                                                                                                                  ",
            "                    ", 
            "                                             s                                    s                        lbbr                  lbbr                     ",
            "                    ",      
            "                                                                                                                                              ",
            "                                                                                                                                                                      ",
            "                                   s       lbbbr             lbbbbbbr           lbbr      lr         lbbr          s          s                 s              D",
            "                    ",
            "                                    ",
            "                                                                                                                                                                              ",
            " dggggggggggggggggggggggggggggggggggggggggggggggggggggggggga          dgggggggggggggggggga    dggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggga", //ground
            "                    ",
        ];
        this.x = player.position.x;
        this.y = player.position.y;
        this.position = new p5.Vector(this.x, 0);
    }
    initializeTileMap(){
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
            }
        }
    }
    drawTileMap() {
        for (var i = 0; i < this.tilemap.length; i++) {
            for (var j = 0; j < this.tilemap[i].length; j++) {
                if (this.tilemap[i][j] == 'b' || this.tilemap[i][j] == 's' || this.tilemap[i][j] == 'l' || this.tilemap[i][j] == 'r') {
                    lvl_two_blockObj.draw(j * 20, i * 20);
                }
                if (this.tilemap[i][j] == 'g' || this.tilemap[i][j] == 'd' || this.tilemap[i][j] == 'a') {
                    lvl_two_groundObj.draw(j * 20, 355);
                }
                if (this.tilemap[i][j] == 'D'){
                    lvl_two_door_obj.draw(j*20, i * 20);
                }
            }
        }
    }

}

var lvl_two_blockObj;
var lvl_two_groundObj;
var tilemap_lvl_two;

function setup_lvl_two_tilemap(){
    lvl_two_blockObj = new lvl_one_block_class(1000, 1000);
    lvl_two_groundObj = new lvl_one_ground_class(1000, 1000);
    lvl_two_door_obj = new door(1000, 1000);
    tilemap_lvl_two = new lvl_two_tilemap();
    tilemap_lvl_two.initializeTileMap();
}

function lvl_two_tilemap_draw() {
    push();
    translate(-tilemap_lvl_two.position.x, 0);
    tilemap_lvl_two.drawTileMap();
    schoolSkullDraw();
    pop();
    load_player_movement_gif();
    player_movement_function();
}