/*
initialization of the third level
*/
function load_lvl_three_images() {
    image(lvl_three_background, 0, 0, 600, 400);
}
var lvl_three_reset_variables = 0;
var in_lvl_three_door;

function setup_lvl_three() {
    in_lvl_three_door = false;
    setup_lvl_three_tilemap();
}


var enemyTest;

function load_lvl_three() {
    load_lvl_three_images();
    if (lvl_three_reset_variables == 0) {
        player.health = 100;
        player.position.x = 0;
        player.position.y = 325;
        blocks = [];
        grounds = [];
        setup_lvl_three();
        lvl_three_boss_obj = new lvl_three_boss(425, 0);
        lvl_three_reset_variables = 1;
    }
    lvl_three_tilemap_draw();
    lvl_three_boss_obj._draw();
    lvl_three_boss_obj._shoot_balls();
    lvl_three_boss_obj._move();
    lvl_three_boss_obj.attack_collision();
    lvl_three_boss_obj.attack();
    if(lvl_three_boss_obj.health <= 0){
        lvl_three_you_win_screen();
        if (keyIsDown(ENTER)) {
            lvl_one_reset_variables = 0;
            lvl_two_reset_variables = 0;
            lvl_three_reset_variables = 0;
            player = new title_screen_player(280, 325);
            blocks = [];
            grounds = [];
            schoolOne = [];
            schoolTwo = [];
            setup_lvl_one_tilemap();
            in_title_menu = false;
            in_lvl_three = false;
            in_title_screen = true;
        }
    }
}
