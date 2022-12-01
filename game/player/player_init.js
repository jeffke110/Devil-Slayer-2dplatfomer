function keyPressed() {
    if (keyCode == 32 && player.is_attacking == false) {
        player.is_attacking = true;
        current_second_time = second();
    }
    //Jump
    if (keyCode === UP_ARROW && player.jump === 0 && player.is_attacking == false) {
        player.jump = 2;
    }
}
function keyReleased() {
    if (keyCode == 32 && player.is_attacking == true) {
        player.is_attacking = false;
    }
}

function player_movement_function() {
    player._coordinates();
    player._jump();
    player._walk();
    player._check_block();
    player._check_ground();
    player._check_door();
    
    player._check_two_block();
    player._check_two_ground();
    player._check_two_door();

    player._check_three_block();
    player._check_three_ground();
    player._check_three_door();

    player._check_boss_block();
    player._check_boss_ground();
    player._update_center();
}

function player_variable_init() {
    gravity = new p5.Vector(0, 0.15);
    jumpForce = new p5.Vector(0, -6);
    player = new title_screen_player(280, 325);
}