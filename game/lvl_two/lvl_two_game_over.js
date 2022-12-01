/*
displays the game over screen for the level 2 
*/
function lvl_two_you_died_screen(){
    load_lvl_two_images();
    push();
    translate(-tilemap_lvl_two.position.x, 0);
    tilemap_lvl_two.drawTileMap();
    pop();
    image(you_died, 75, 100);
    if(second() % 2 != 0){
        image(press_enter, 75, 250);
    }
    load_player_movement_gif();
}