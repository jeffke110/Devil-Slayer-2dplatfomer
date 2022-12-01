/*
displays the images for the menu 
*/
var up_arrow_img;
var left_arrow_img;
var right_arrow_img;
var move_left_img;
var move_right_img;
var jump_img;
var space_bar_img;
var attack_img;
var arrow_img;



function preload_menu_screen_images() {
    up_arrow_img = loadImage("../assets/menu_screen/up_arrow.png");
    left_arrow_img = loadImage("../assets/menu_screen/left_arrow.png");
    right_arrow_img = loadImage("../assets/menu_screen/right_arrow.png");
    move_left_img = loadImage("../assets/menu_screen/move_left.png");
    move_right_img = loadImage("../assets/menu_screen/move_right.png");
    jump_img = loadImage("../assets/menu_screen/jump.png");
    space_bar_img = loadImage("../assets/menu_screen/space_bar.png");
    attack_img = loadImage("../assets/menu_screen/attack.png");
    arrow_img = loadImage("../assets/menu_screen/arrow.png");

}

function load_menu_screen_images() {
    image(background_one, -40, 0);
    image(background_one, 340, 0);
    image(middleground, 0, 120);
    image(middleground, 375, 120);
    image(up_arrow_img, 40, 20);
    image(jump_img, 50, -10);
    image(left_arrow_img, 40, 60);
    image(move_left_img, 55, 30);
    image(right_arrow_img, 40, 100);
    image(move_right_img, 55, 70);
    image(space_bar_img, 250, 20);
    image(attack_img, 340, -10);
    if (second() % 2 == 0) {
        image(arrow_img, 445, 300);
    }

    load_ground();
}

function load_menu_screen() {
    load_menu_screen_images();
    load_player_movement_gif();
    player_movement_function();
}

function setup_menu_screen() {
    preload_menu_screen_images();
}