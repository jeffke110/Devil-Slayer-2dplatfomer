var in_title_screen;
var in_title_menu;
var in_lvl_one;
var in_lvl_two;
var in_lvl_three;
var in_lvl_one_boss;

function removeFromArray(arr, element) {
    for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == element) {
            arr.splice(i, 1);
        }
    }
}

function setup() {
    createCanvas(600, 400);
    setup_title_screen();
    setup_menu_screen();
    setup_lvl_one();
    preload_game_over_images();
    in_title_menu = false;
    in_title_screen = true;
    in_lvl_one = false;
    in_lvl_two = false;
    in_lvl_three = false;
    in_lvl_one_boss = false;
}
function draw() {
    background(253, 94, 83);
    if (in_title_screen == true) {
        load_title_screen();
    }
    if (keyCode == ENTER && in_title_screen == true) {
        in_title_screen = false;
        in_title_menu = true;
    }
    if (in_title_menu == true) {
        load_menu_screen();
        if (player.position.x > 575) {
            in_lvl_one = true;
            in_title_menu = false;
        }
    }
    if (in_lvl_one == true) {
        if (player.health <= 0) {
            lvl_one_you_died_screen();
            if (keyIsDown(ENTER)) {
                lvl_one_reset_variables = 0;
                player = new title_screen_player(280, 325);
                lvl_one_enemies = [];
                blocks = [];
                grounds = [];
                setup_lvl_one_tilemap();
                in_title_menu = false;
                in_lvl_one = false;
                in_title_screen = true;
            }
        } else {
            load_lvl_one();
        }
        if (in_lvl_one_door && keyIsDown(ENTER)) {
            in_lvl_one = false;
            in_lvl_two = true;
        }
    }
    if (in_lvl_two == true) {
        if (player.health <= 0) {
            lvl_two_you_died_screen();
            if (keyIsDown(ENTER)) {
                lvl_one_reset_variables = 0;
                lvl_two_reset_variables = 0;
                player = new title_screen_player(280, 325);
                blocks = [];
                grounds = [];
                schoolOne = [];
                schoolTwo = [];
                setup_lvl_one_tilemap();
                in_title_menu = false;
                in_lvl_two = false;
                in_title_screen = true;
            }
        } else {
            load_lvl_two();
        }
        if (in_lvl_two_door && keyIsDown(ENTER)) {
            in_lvl_two = false;
            in_lvl_three = true;
        }
    }
    if (in_lvl_three == true) {
        if (player.health <= 0) {
            lvl_three_you_died_screen();
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
        } else {
            load_lvl_three();
        }
    }

}