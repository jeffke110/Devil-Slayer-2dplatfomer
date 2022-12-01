//code not used in project
function load_lvl_one_boss_images(){
    image(background_one, -40, 0);
    image(background_one, 340, 0);
    image(middleground, 0, 120);
    image(middleground, 375, 120);
}


var lvl_one_boss_reset_variables = 0;


function setup_lvl_one_boss(){
    setup_lvl_one_boss_tilemap();
}

function load_lvl_one_boss(){
    load_lvl_one_boss_images();
    if(lvl_one_boss_reset_variables == 0){
        player.position.x = 0;
        player.position.y = 325;
        blocks = [];
        grounds = [];
        setup_lvl_one_boss();
        lvl_one_boss_obj = new lvl_one_boss(425, 0);
        lvl_one_boss_reset_variables = 1;
    }
    lvl_one_boss_obj._draw();
    lvl_one_boss_obj._move();
    lvl_one_boss_tilemap_draw();
}