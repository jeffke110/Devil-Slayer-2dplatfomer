var lvl_one_enemies = [];

var lvl_one_enemy = function(x, y){ 
    this.forward = true;
    this.idle_left = x - 50;
    this.idle_right = x + 50; 
    this.attack_mode = false;
    this.width = 45;
    this.height = 45;
    this.centerX = this.x;
    this.centerY = this.y;

    this.position = new p5.Vector(x, y);
    this.velocity = new p5.Vector(0, 0);
    this.acceleration = new p5.Vector(0, 0);
    this.force = new p5.Vector(0, 0);
    this.currFrame = frameCount;
    this.jump = 0;

    this.fireballs = [];
    this.health = 50;
}
lvl_one_enemy.prototype._move = function(){
    if(dist(player.translateX, player.position.y, this.position.x, this.position.y) < 200){
        this.attack_mode = true;
    }else if (this.attack_mode == false){
        if(this.position.x == this.idle_right && this.forward){
            this.position.x -= .5;
            this.forward = false;
        }
        if(this.position.x < this.idle_right && this.forward){
            this.position.x += .5;
        }
        if(this.position.x == this.idle_left && !this.forward){
            this.position.x += .5;
            this.forward = true;
        }
        if(this.position.x > this.idle_left && !this.forward){
            this.position.x -= .5;
        }
    }
}
lvl_one_enemy.prototype._attack = function(){
    if(this.attack_mode == true){
        if(dist(this.centerX, this.centerY, player.centerX, player.centerY) < (40)){
            player.health -= .1;
            if(frameCount % 15 == 0){
                player.hit = 1;
            }else{
               player.hit = 0;
            }
        }else{
            player.hit = 0;
        }
        if(this.position.x < player.centerX && dist(this.centerX, 0, player.centerX, 0) > 50){
            this.position.x += .5;
            this.forward = true;
        }
        else if(this.position.x > player.centerX && dist(this.centerX, 0, player.centerX, 0) > 50){
            this.position.x -= .5;
            this.forward = false;
        }
        if(dist(player.translateX, player.position.y, this.position.x, this.position.y) > 200){
            this.attack_mode = false;
        }
    }
}
lvl_one_enemy.prototype._draw = function(){
    if(this.forward){
        image(bat_forward_gif, this.position.x, this.position.y);
    }else{
        image(bat_backward_gif, this.position.x, this.position.y);
    }
    text(this.health, this.position.x + 10, this.position.y);    
}
lvl_one_enemy.prototype._update_center = function(){
    this.centerX = this.position.x + this.width/2;
    this.centerY = this.position.y + this.height/2;
    
    point(this.centerX, this.centerY);
    //text("(" + this.centerX + ", " + this.centerY + ")", this.position.x, this.position.y - 20);
}
var bat_forward_gif;
var bat_backward_gif;
var fire_ball_forward_gif;
var fire_ball_backward_gif;

function draw_lvl_one_enemy_movement(){
    for(var i = 0; i < lvl_one_enemies.length; i++){
        lvl_one_enemies[i]._move();
        lvl_one_enemies[i]._attack();
        lvl_one_enemies[i]._draw();
        lvl_one_enemies[i]._update_center();
        lvl_one_enemies[i]._cast_fireball();
        lvl_one_enemies[i]._attack_collision();
        if(lvl_one_enemies[i].health <= 0){
            this.lvl_one_enemies.splice(i, 1);
        }
    }
}
function preload_lvl_one_enemy_images() {
    bat_forward_gif = loadImage("../assets/enemies/eye_edited.gif");
    bat_backward_gif = loadImage("../assets/enemies/eye_edited_flipped.gif");
    fire_ball_forward_gif = loadImage("../assets/enemies/fire_ball_forward.gif");
    fire_ball_backward_gif = loadImage("../assets/enemies/fire-ball.gif");
}
