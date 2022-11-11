var in_title_screen;
var in_title_menu;
var in_lvl_one;

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
    in_lvl_one = false;
    in_title_screen = true;

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
        text("move to right to enter level one", 400, 300);
        if (player.position.x > 575) {
            in_lvl_one = true;
            in_title_menu = false;
        }
    }
    if (in_lvl_one == true) {
        if (player.health <= 0) {
            lvl_one_you_died_screen();
            if (keyIsDown(ENTER)) {
                reset_variables = 0;
                player = new title_screen_player(280, 325);
                lvl_one_enemies = [];
                blocks = [];
                grounds = [];
                setup_tilemap();
                in_title_menu = false;
                in_lvl_one = false;
                in_title_screen = true;
            }
        } else {
            load_lvl_one();
        }
    }
}