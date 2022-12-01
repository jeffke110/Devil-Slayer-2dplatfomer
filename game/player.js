var player;
var gravity, jumpForce;

var title_screen_player = function (x, y) {

    this.width = 20;
    this.height = 45;

    this.position = new p5.Vector(x, y);
    this.velocity = new p5.Vector(0, 0);
    this.acceleration = new p5.Vector(0, 0);
    this.force = new p5.Vector(0, 0);
    this.currFrame = frameCount;
    this.jump = 0;

    this.centerX = this.x;
    this.centerY = this.y;

    this.translateX = this.x;

    this.is_attacking = false;
    this.is_walking = false;
    this.is_forward = true;

    this.health = 100;
    this.hit = 0;

}
title_screen_player.prototype.applyForce = function (force) {
    this.acceleration.add(force);
}
title_screen_player.prototype._coordinates = function () {
    stroke('green'); // Change the color
    strokeWeight(3); // Make the points 10 pixels in size
    text(round(this.health, 0), this.position.x, this.position.y - 10);
    stroke('green'); // Change the color
    strokeWeight(3); // Make the points 10 pixels in size
}
title_screen_player.prototype._walk = function () {
    if (in_lvl_one == false && in_lvl_two == false) {
        if (keyIsDown(LEFT_ARROW) && (this.is_attacking == false || this.jump > 0)) {
            this.is_walking = true;
            this.is_forward = false;
            this.position.x -= 1.5;
        } else if (keyIsDown(RIGHT_ARROW) && (this.is_attacking == false || this.jump > 0)) {
            this.is_walking = true;
            this.is_forward = true;
            this.position.x += 1.5;
        } else {
            this.is_walking = false;
        }
    } else if(in_lvl_one == true) {
        if (keyIsDown(LEFT_ARROW) && (this.is_attacking == false || this.jump > 0) && this.health > 0) {
            this.is_walking = true;
            this.is_forward = false;
            tilemap_lvl_one.position.x -= 1.5;

        } else if (keyIsDown(RIGHT_ARROW) && (this.is_attacking == false || this.jump > 0) && this.health > 0) {
            this.is_walking = true;
            this.is_forward = true;
            tilemap_lvl_one.position.x += 1.5;
        } else {
            this.is_walking = false;
        }
    } else if (in_lvl_two == true){
        if (keyIsDown(LEFT_ARROW) && (this.is_attacking == false || this.jump > 0) && this.health > 0) {
            this.is_walking = true;
            this.is_forward = false;
            tilemap_lvl_two.position.x -= 1.5;

        } else if (keyIsDown(RIGHT_ARROW) && (this.is_attacking == false || this.jump > 0) && this.health > 0) {
            this.is_walking = true;
            this.is_forward = true;
            tilemap_lvl_two.position.x += 1.5;
        } else {
            this.is_walking = false;
        }

    }
}
title_screen_player.prototype._jump = function () {
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
    if(this.position.y < 0 && in_lvl_three){
        this.position.y = 0;
        this.velocity.y = 0;
    }
    if (this.position.y >= 324.99 && in_title_menu == true) {
        this.position.y = 325;
        this.velocity.y = 0;
        this.jump = 0;
    }
    if (this.position.x > 575) {
       // this.position.x = 575;
    } else if (this.position.x < 0) {
        this.position.x = 0;
    }
    if (this.position.y > 400) {
        this.health = 0;
    }

}
title_screen_player.prototype._update_center = function () {
    if(in_lvl_one == true){
        this.translateX = tilemap_lvl_one.position.x + 300;
    }
    if(in_lvl_two == true){
        this.translateX = tilemap_lvl_two.position.x + 300;
    }
    //if(in_lvl_three == true){
    //    this.translateX = tilemap_lvl_three.position.x + 300;
    //}
    this.centerX = this.translateX + this.width / 2;
    this.centerY = this.position.y + this.height / 2;
    //point(this.centerX, this.centerY);
}

