var lvl_three_boss_obj;
/*
class for the lvl 3 boss keeps track of bouncing balls and ghosts
*/
var lvl_three_boss = function (x, y) {
    this.position = new p5.Vector(x, y);
    this.velocity = new p5.Vector(0, 0);
    this.acceleration = new p5.Vector(0, 0);
    this.width = 168;
    this.height = 131;
    this.centerX = 0;
    this.centerY = 0;
    this.moveDown = true;
    this.boss_ghost = [];
    this.boss_balls = [];
    this.health = 100;
}
lvl_three_boss.prototype._draw = function () {
    image(demon_gif_edited, this.position.x, this.position.y);
    this.centerX = this.position.x + this.width/2;
    this.centerY = this.position.y + this.height/2;
    stroke('red'); // Change the color
    strokeWeight(3); // Make the points 10 pixels in size
    text(this.health, this.position.x + 10, this.position.y); 
}
lvl_three_boss.prototype._move = function () {
    if (this.moveDown == true) {
        this.position.y++;
    } else {
        this.position.y--;
    }
    if (this.moveDown == true && this.position.y > 269) {
        this.moveDown = false;
    }
    if (this.moveDown == false && this.position.y < 0) {
        this.moveDown = true;
    }
}

lvl_three_boss.prototype._shoot_balls = function () {
    if (frameCount % 180 == 0) {
        this.boss_ghost.push(new boss_fire(this.position.x + this.width/2, this.position.y +  this.height/2));
        this.boss_ghost[this.boss_ghost.length - 1].setup();
    }
    for (var i = 0; i < this.boss_ghost.length; i++) {
        this.boss_ghost[i].pathfinder();
    }
    for (var i = 0; i < this.boss_ghost.length; i++) {
        this.boss_ghost[i].draw();
        this.boss_ghost[i].attack();
        this.boss_ghost[i].attack_collision();
        if (this.boss_ghost[i].done == 1) {
            this.boss_ghost[i].follow();
        }
        if(this.boss_ghost[i].death == true){
            this.boss_ghost.splice(i, 1);
        }
    }

    if (frameCount % 180 == 0) {
        this.boss_balls.push(new ballObj(this.position.x + this.width/2, this.position.y +  this.height/2));
    }
    for (var i = 0; i < this.boss_balls.length; i++){
        this.boss_balls[i].draw();
        this.boss_balls[i].move();
        this.boss_balls[i].attack_collision();
        this.boss_balls[i].attack();
        if(this.boss_balls[i].hit == 2){
            this.boss_balls.splice(i, 1);
        }
    }
}

lvl_three_boss.prototype.attack_collision = function(){
    if(player.is_attacking && player.is_forward){
        if(dist(player.position.x + 55, player.position.y + 22.5, this.centerX, this.centerY) < this.height/2){
            this.health--;
            
        }
    }
    if(player.is_attacking && !player.is_forward){
        if(dist(player.position.x -15, player.position.y + 22.5, this.centerX, this.centerY) < this.height/2){
            this.health--;
        
        }
    }
}

lvl_three_boss.prototype.attack = function(){
    if(dist(this.centerX, this.centerY, player.position.x + player.width /2, player.position.y + player.height/2) < (60)){
        player.health -= .1;
    }
}