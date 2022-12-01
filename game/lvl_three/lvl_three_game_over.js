/*
game over screen and game win screen for level 3
*/
function lvl_three_you_died_screen(){
    load_lvl_three_images();
    tilemap_lvl_three.drawTileMap();
    image(you_died, 75, 100);
    if(second() % 2 != 0){
        image(press_enter, 75, 250);
    }
    load_player_movement_gif();
}


function lvl_three_you_win_screen(){
    load_lvl_three_images();
    tilemap_lvl_three.drawTileMap();
    image(you_win, 75, 100);
    if(second() % 2 != 0){
        image(press_enter, 75, 250);
    }
    load_player_movement_gif();
}