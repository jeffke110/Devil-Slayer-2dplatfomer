var background_one;
var middleground;
var dragon_slayer_title;
var press_start;
var author;
var ground_img;

function preload_title_screen_images() {
    background_one = loadImage("../assets/background/background.png");
    middleground = loadImage("../assets/background/middleground.png");
    dragon_slayer_title = loadImage("../assets/title_screen/dragon_slayer_title_3.png");
    author = loadImage("../assets/title_screen/name_2.png");
    press_start = loadImage("../assets/title_screen/press_start_2.png");
    ground_img = loadImage("../assets/background/ground.png");
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
    image(dragon_slayer_title, -10, 0);
    
    if (second() % 2 == 0) {
        image(press_start, 150, 270);
    }
    load_ground();
    image(author, 400, -30);
}
function load_title_screen() {
    load_title_screen_images();
    load_player_movement_gif();
    //player_movement_function();
    load_enemy_movement();
    enemies_movement_function();
}
function setup_title_screen(){
    preload_title_screen_images();
    preload_player_images();
    player_variable_init();
    enemies_variable_init();
    preload_enemy_images();
}