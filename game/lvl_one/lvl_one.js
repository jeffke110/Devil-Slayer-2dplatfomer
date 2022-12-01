/*
initialize variables and functions for level one. Use abstraction so that the functions are easy to read
*/

var lvl_one_block;
var lvl_one_door;
var lvl_one_door_text;
var in_lvl_one_door;
function preload_lvl_one_images(){
    lvl_one_block = loadImage("../assets/lvl_one/lvl_one_block.png");
    lvl_one_door = loadImage("../assets/lvl_one/lvl_one_door_edited.png");
    lvl_one_door_text = loadImage("../assets/lvl_one/lvl_one_door_text.png");
}

function setup_lvl_one(){
    in_lvl_one_door = false;
    preload_lvl_one_images();
    preload_lvl_one_enemy_images();
    setup_lvl_one_tilemap();
}

function load_lvl_one_images(){
    image(background_one, -40, 0);
    image(background_one, 340, 0);
    image(middleground, 0, 120);
    image(middleground, 375, 120);
}

var lvl_one_reset_variables = 0;
function load_lvl_one(){
    load_lvl_one_images();
    lvl_one_tilemap_draw();
    if(lvl_one_reset_variables == 0){
        //reset player position
        player.health = 100;
        player.position.x = 300;
        player.position.y = 325;
        tilemap_lvl_one.position.x = 0;
        tilemap_lvl_one.position.y = player.position.y;
        lvl_one_reset_variables = 1;
    }
}
