var skull = function (x, y) {
    this.x = x;
    this.y = y;
    this.centerX = this.x + 15;
    this.centerY = this.y  + 15;
    this.isOnFire = true;
    this.health = 10;
};
skull.prototype.display = function () {
    var self = this;
    //fill(255,0,0);
    //rect(this.x, this.y, 10, 10);
    if(second() % 2 == 0){
        this.isOnFire = false;
        image(skull_no_fire_img, this.x, this.y, 30, 30);
    }else{
        this.isOnFire = true;
        image(skull_img, this.x, this.y, 40, 40);
    }
    this.centerX = this.x + 15;
    this.centerY = this.y + 15;
    text(this.health, this.x + 10, this.y);  
    //point(this.centerX, this.centerY);
}

skull.prototype.attack = function(){
    if(dist(this.centerX, this.centerY, player.centerX, player.centerY) < (40) &&  this.isOnFire){
        player.health -= .1;
    }
}
skull.prototype.attack_collision = function(){
    if(player.is_attacking && player.is_forward){
        if(dist(player.translateX + 55, player.position.y + 22.5, this.centerX, this.centerY) < 20){
            this.health--;
            this.x += 3;
        }
    }
    if(player.is_attacking && !player.is_forward){
        if(dist(player.translateX -15, player.position.y + 22.5, this.centerX, this.centerY) < 30){
            this.health--;
            this.x -= 3;
        }
    }
}