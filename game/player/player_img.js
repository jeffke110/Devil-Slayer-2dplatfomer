var idle_forwawrd_gif;
var idle_backward_gif;
var run_forward_gif;
var run_backward_gif;
var jump_forward_gif;
var jump_backward_gif;
var fall_forward_gif;
var fall_backward_gif;
var attack_forward_gif;
var attack_backward_gif;

function preload_player_images() {
    idle_forwawrd_gif = loadImage("../assets/main_character/Idle_edited.gif");
    idle_backward_gif = loadImage("../assets/main_character/Idle_edited_flipped.gif");
    run_forward_gif = loadImage("../assets/main_character/Run_edited.gif");
    run_backward_gif = loadImage("../assets/main_character/Run_edited_flipped.gif");
    jump_forward_gif = loadImage("../assets/main_character/Jump_edited.gif");
    jump_backward_gif = loadImage("../assets/main_character/Jump_edited_flipped.gif");
    fall_forward_gif = loadImage("../assets/main_character/Fall_edited.gif");
    fall_backward_gif = loadImage("../assets/main_character/Fall_edited_flipped.gif");
    attack_forward_gif = loadImage("../assets/main_character/Attack_edited.gif");
    attack_backward_gif = loadImage("../assets/main_character/Attack_edited_flipped.gif");
}
function load_player_movement_gif() {
    if (player.hit == 1) {
    } else {
        //attack forward
        if (player.is_attacking == true && player.is_forward == true) {
            image(attack_forward_gif, player.position.x - 10, player.position.y);
            //attack backward
        } else if (player.is_attacking == true && player.is_forward == false) {
            image(attack_backward_gif, player.position.x - 35, player.position.y);
            //jump forward
        } else if (player.jump > 0 && player.is_forward == true && player.velocity.y < 0) {
            image(jump_forward_gif, player.position.x, player.position.y);
            //jump backward
        } else if (player.jump > 0 && player.is_forward == false && player.velocity.y < 0) {
            image(jump_backward_gif, player.position.x, player.position.y);
            //fall forward
        } else if (player.jump > 0 && player.is_forward == true && player.velocity.y > 0) {
            image(fall_forward_gif, player.position.x, player.position.y);
            //fall backward
        } else if (player.jump > 0 && player.is_forward == false && player.velocity.y > 0) {
            image(fall_backward_gif, player.position.x, player.position.y);
            //walking foward
        } else if (player.is_walking == true && player.is_forward == true) {
            image(run_forward_gif, player.position.x, player.position.y);
            //walking backwards
        } else if (player.is_walking == true && player.is_forward == false) {
            image(run_backward_gif, player.position.x, player.position.y);
            //idle forward
        } else if (player.is_walking == false && player.is_forward == true) {
            image(idle_forwawrd_gif, player.position.x, player.position.y);
            //idle backward
        } else if (player.is_walking == false && player.is_forward == false) {
            image(idle_backward_gif, player.position.x, player.position.y);
        }
    }
}