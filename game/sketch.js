var in_title_screen;
var in_title_menu;
function setup() {
    createCanvas(600, 400);
    setup_title_screen();
    setup_menu_screen();
    in_title_menu = false;
    in_title_screen = true;
}


function draw() {
    background(253, 94, 83);
    if (in_title_screen == true) {
        load_title_screen();
    }
    if(keyCode == ENTER){
        in_title_screen = false;
        in_title_menu = true;
    }
    if(in_title_menu == true){
        load_menu_screen();
    }

}