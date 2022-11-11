
var lvl_one_block;
function preload_lvl_one_images(){
    lvl_one_block = loadImage("../assets/lvl_one/lvl_one_block.png");
}

function setup_lvl_one(){
    preload_lvl_one_images();
    preload_lvl_one_enemy_images();
    setup_tilemap();
}

function load_lvl_one_images(){
    image(background_one, -40, 0);
    image(background_one, 340, 0);
    image(middleground, 0, 120);
    image(middleground, 375, 120);
}

var reset_variables = 0;
function load_lvl_one(){
    load_lvl_one_images();
    lvl_one_tilemap_draw();
    if(reset_variables == 0){
        //reset player position
        player.position.x = 300;
        player.position.y = 325;
        tilemap_lvl_one.position.x = player.position.x;
        tilemap_lvl_one.position.y = player.position.y;
        reset_variables = 1;
    }
}
