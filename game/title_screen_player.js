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
var player;
var current_second_time;
var gravity, jumpForce;

class title_screen_player {
    constructor(x, y) {
        this.position = new p5.Vector(x, y);
        this.velocity = new p5.Vector(0, 0);
        this.acceleration = new p5.Vector(0, 0);
        this.force = new p5.Vector(0, 0);
        this.currFrame = frameCount;
        this.jump = 0;

        this.is_attacking = false;
        this.is_walking = false;
        this.is_forward = true;
    }
    applyForce(force) {
        this.acceleration.add(force);
    }
    _walk(){
        if (keyIsDown(LEFT_ARROW) && (this.is_attacking == false || this.jump > 0)) {
            this.is_walking = true;
            this.is_forward = false;
            this.position.x -= 1;
        } else if (keyIsDown(RIGHT_ARROW) && (this.is_attacking == false || this.jump > 0)) {
            this.is_walking = true;
            this.is_forward = true;
            this.position.x += 1;
        } else {
            this.is_walking = false;
        }
    }
    _jump(){
        if (this.jump === 2) {
            this.applyForce(jumpForce);
            this.jump = 1;
        }
        if (this.jump > 0) {
            this.applyForce(gravity);
        }
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0, 0);
        //reset position
        if (this.position.x > 575) {
            this.position.x = 575;
        } else if (this.position.x < 0) {
            this.position.x = 0;
        }
        if (this.position.y >= 324.99) {
            this.position.y = 325;
            this.velocity.y = 0;
            this.jump = 0;
        }

    }
    _attack(){
       // if(player.is_attacking == true){
       //     player.is_attacking = false;
        //}
    }
}
function keyPressed() {
    if(keyCode == 32 && player.is_attacking == false){
        player.is_attacking = true;
        current_second_time = second(); 
    }
    //Jump
    if(keyCode === UP_ARROW && player.jump === 0 && player.is_attacking == false){
        player.jump = 2;
    }
}
function keyReleased() {
    if(keyCode == 32 && player.is_attacking == true){
        player.is_attacking = false;
    }
}
function player_movement_function(){
    player._jump();
    player._walk();
    player._attack();
}
function player_variable_init() {
    gravity = new p5.Vector(0, 0.15);
    jumpForce = new p5.Vector(0, -4);
    player = new title_screen_player(280, 325);
}
function preload_player_images() {
    idle_forwawrd_gif = loadImage("../assets/main_character/Idle_edited.gif");
    idle_backward_gif = loadImage("../assets/main_character/Idle_edited_flipped.gif");
    run_forward_gif = loadImage("../assets/main_character/Run_edited.gif");
    run_backward_gif = loadImage("../assets/main_character/Run_edited_flipped.gif");
    jump_forward_gif = loadImage("../assets/main_character/Jump_edited.gif");
    jump_backward_gif = loadImage("../assets/main_character/Jump_edited_flipped.gif");
    fall_forward_gif = loadImage("../assets/main_character/Fall_edited.gif");
    fall_backward_gif = loadImage("../assets/main_character/Fall_edited_flipped.gif");
    attack_forward_gif =  loadImage("../assets/main_character/Attack_edited.gif");
    attack_backward_gif =  loadImage("../assets/main_character/Attack_edited_flipped.gif");
}
function load_player_movement_gif() {
    //attack forward
    if(player.is_attacking == true && player.is_forward == true){
        image(attack_forward_gif, player.position.x - 10, player.position.y);
    //attack backward
    }else if(player.is_attacking == true && player.is_forward == false){
        image(attack_backward_gif, player.position.x - 35, player.position.y);
    //jump forward
    }else if(player.jump > 0 && player.is_forward == true && player.velocity.y < 0){
        image(jump_forward_gif, player.position.x, player.position.y);
    //jump backward
    }else if(player.jump > 0 && player.is_forward == false && player.velocity.y < 0){
        image(jump_backward_gif, player.position.x, player.position.y);
    //fall forward
    }else if(player.jump > 0 && player.is_forward == true && player.velocity.y > 0){
        image(fall_forward_gif, player.position.x, player.position.y);
    //fall backward
    }else if(player.jump > 0 && player.is_forward == false && player.velocity.y > 0){
        image(fall_backward_gif, player.position.x, player.position.y);
    //walking foward
    }else if (player.is_walking == true && player.is_forward == true) {
        image(run_forward_gif, player.position.x, player.position.y);
    //walking backwards
    }else if (player.is_walking == true && player.is_forward == false) {
        image(run_backward_gif, player.position.x, player.position.y);
    //idle forward
    }else if (player.is_walking == false && player.is_forward == true) {
        image(idle_forwawrd_gif, player.position.x, player.position.y);
    //idle backward
    }else if (player.is_walking == false && player.is_forward == false) {
        image(idle_backward_gif, player.position.x, player.position.y);
    }
}
