/*
displays the images for the title screen
*/
var background_one;
var middleground;
var dragon_slayer_title;
var devil_slayer_title;
var press_start;
var author;
var ground_img;

var lvl_two_background;
var lvl_three_background;
var skull_img;
var skull_no_fire_img;
var ghost_img;
var holy_ball;
var fire_red;
var you_win;


function preload_title_screen_images() {
    background_one = loadImage("../assets/background/background.png");
    middleground = loadImage("../assets/background/middleground.png");
    dragon_slayer_title = loadImage("../assets/title_screen/dragon_slayer_title_3.png");
    devil_slayer_title = loadImage("../assets/title_screen/devil_slayer.png");
    author = loadImage("../assets/title_screen/name_2.png");
    press_start = loadImage("../assets/title_screen/press_start_2.png");
    ground_img = loadImage("../assets/background/ground.png");
    lvl_two_background = loadImage("../assets/background/background_cemetary.png");
    lvl_three_background = loadImage("../assets/background/lvl_three_background.png");
    skull_img = loadImage("../assets/enemies/fire-skull-edited.gif");
    skull_no_fire_img = loadImage("../assets/enemies/fire-skull-no-fire.gif");
    ghost_img = loadImage("../assets/enemies/ghost.gif");
    fire_red = loadImage("../assets/enemies/fireballs.png");
    holy_ball = loadImage("../assets/enemies/holyball.png");
    you_win = loadImage("../assets/enemies/you_win.png");
}

function load_ground() {
    var i = 0;
    while (i <= 600) {
        image(ground_img, i, 355);
        i = i + 15;
    }
}
function load_title_screen_images() {
    image(background_one, -40, 0);
    image(background_one, 340, 0);
    image(middleground, 0, 120);
    image(middleground, 375, 120);
    image(devil_slayer_title, -10, 0);
    
    if (second() % 2 == 0) {
        image(press_start, 150, 270);
    }
    load_ground();
    image(author, 400, -30);
}
function load_title_screen() {
    load_title_screen_images();
    load_player_movement_gif();
    title_load_enemy_movement();
    title_enemies_movement_function();
}
function setup_title_screen(){
    preload_title_screen_images();
    preload_player_images();
    player_variable_init();
    title_enemies_variable_init();
    title_preload_enemy_images();
}