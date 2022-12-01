//code not used in the project
class lvl_one_boss_tilemap {
    constructor() {
        this.tilemap = [
            "                    ",
            "                    ",
            "             ",
            "                    ",
            "                    ",
            "                    ",
            "lbr     lbr",
            "                    ",
            "                    ",
            "                    ",
            "    lbr     lbr     ",
            "                    ",
            "                    ",
            "                    ",
            "lbr     lbr",
            "                    ",
            "                    ",
            "                    ",
            "ggggggggggggggggggga", //ground
            "                    ",
        ];
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
                    lvl_one_boss_blockObj.draw(j * 20, i * 20);
                }
                if (this.tilemap[i][j] == 'g' || this.tilemap[i][j] == 'd' || this.tilemap[i][j] == 'a') {
                    lvl_one_boss_groundObj.draw(j * 20, 355);
                }
                if (this.tilemap[i][j] == 'D'){
                    lvl_one_door_obj.draw(j*20, i * 20);
                }
            }
        }
    }
}

var lvl_one_boss_blockObj;
var lvl_one_boss_groundObj;

var tilemap_lvl_one_boss;
function setup_lvl_one_boss_tilemap(){
    lvl_one_boss_blockObj = new lvl_one_block_class(1000, 1000);
    lvl_one_boss_groundObj = new lvl_one_ground_class(1000, 1000);
    tilemap_lvl_one_boss = new lvl_one_boss_tilemap();
    tilemap_lvl_one_boss.initializeTileMap();
}

function lvl_one_boss_tilemap_draw() {
    tilemap_lvl_one_boss.drawTileMap();
    load_player_movement_gif();
    player_movement_function();
}