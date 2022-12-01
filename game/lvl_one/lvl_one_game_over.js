/*
level one game over screen: reset variables and display images for the game over screen
*/

var you_died;
var press_enter;
function preload_game_over_images(){
    you_died = loadImage("../assets/game_over_screen/you_died.png");
    press_enter =  loadImage("../assets/game_over_screen/restart.png");
}
function lvl_one_you_died_screen(){
    load_lvl_one_images();
    push();
    translate(-tilemap_lvl_one.position.x, 0);
    tilemap_lvl_one.drawTileMap();
    pop();
    image(you_died, 75, 100);
    if(second() % 2 != 0){
        image(press_enter, 75, 250);
    }
    load_player_movement_gif();
}