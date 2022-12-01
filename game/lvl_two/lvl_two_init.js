/*
initialization of level 2
*/

function load_lvl_two_images(){
    image(lvl_two_background, 0, 0);
}

var lvl_two_reset_variables = 0;
var in_lvl_two_door;
function setup_lvl_two(){
    in_lvl_two_door = false;
    setup_lvl_two_tilemap();
}
function load_lvl_two(){
    load_lvl_two_images();
    if(lvl_two_reset_variables == 0){
        player.health = 100;
        player.position.x = 300;
        player.position.y = 325;
        blocks = [];
        grounds = [];
        school_skull_setup();
        setup_lvl_two();
        tilemap_lvl_two.position.x = 0;
        tilemap_lvl_two.position.y = player.position.y;
        lvl_two_reset_variables =  1;
    }
    lvl_two_tilemap_draw();
}