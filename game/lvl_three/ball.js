/*
ball class that controls the bounce and collision with the player and boss of level 3
*/
var ballObj = function (x, y) {
    this.x = x;
    this.y = y;
    this.xDir = -1;
    this.yDir = random(-2, 2);
    this.size = 20;
    this.hit = 0;
    this.reflect = false;
    this.centerX = 0;
    this.centerY = 0;
}
ballObj.prototype.draw = function () {
    noStroke();
    if(this.reflect == false){
        image(fire_red, this.x, this.y, 20, 20);
    }else{
        image(holy_ball, this.x, this.y, 20, 20);
    }
    this.centerX = this.x + 10;
    this.centerY = this.y + 10;
}
ballObj.prototype.move = function () {
    this.x += this.xDir;
    this.y += this.yDir;
    //bounce off edges
    if ((this.x > (width - 10)) || (this.x < 10)) {
        this.xDir = -this.xDir;
        this.hit++;
    }
    if ((this.y > (height - 10)) || (this.y < 10)) {
        this.yDir = -this.yDir;
        this.hit++;
    }
}
ballObj.prototype.attack_collision = function(){
    if(player.is_attacking && player.is_forward){
        if(dist(player.position.x + 55, player.position.y + 22.5, this.centerX, this.centerY) < 30 && this.reflect == false){
            this.xDir = -this.xDir;
            this.reflect = true;
            
        }
    }
    if(player.is_attacking && !player.is_forward){
        if(dist(player.position.x -15, player.position.y + 22.5, this.centerX, this.centerY) < 40 && this.reflect == false){
            this.xDir = -this.xDir;
            this.reflect = true;
        }
    }
}
ballObj.prototype.attack = function(){
    if(dist(this.centerX, this.centerY, player.position.x + player.width /2, player.position.y + player.height/2) < (30) && this.reflect == false){
        player.health -= .1;
    }

    if(dist(this.centerX, this.centerY, lvl_three_boss_obj.centerX, lvl_three_boss_obj.centerY) < (50) && this.reflect == true){
        lvl_three_boss_obj.health -= 25;
        this.hit = 2;
    }
}