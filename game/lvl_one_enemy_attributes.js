var fireball = function(x, y, forward){
    this.x = x;
    this.y = y;
    this.forward = forward;
    this.width = 15;
    this.height = 15;
    this.hit = 0;
}

fireball.prototype.draw = function(){
    if(this.forward){
        image(fire_ball_forward_gif, this.x, this.y);
        this.x++;
    }else{
        image(fire_ball_backward_gif, this.x, this.y);
        this.x--;
    }
    if(dist(this.x + this.width/2, this.y + this.height/2, player.centerX, player.centerY) < 20 && this.hit == 0){
        player.health -= 15;
        this.hit = 1;
    }
}
lvl_one_enemy.prototype._cast_fireball = function(){
    if(this.attack_mode == true && frameCount % 180 == 0){
        this.fireballs.push(new fireball(this.centerX, this.centerY - 10, this.forward));
    }
    for(var i = 0; i < this.fireballs.length; i++){
        this.fireballs[i].draw();
        if(this.fireballs[i].hit == 1 || dist(this.fireballs[i].x, this.fireballs[i].y, this.centerX, this.centerY) > 200){
            this.fireballs.splice(i, 1);
        }
    }
}
lvl_one_enemy.prototype._attack_collision = function(){
    if(player.is_attacking && player.is_forward){
        if(dist(player.translateX + 55, player.position.y + 22.5, this.centerX, this.centerY) < 15){
            this.health--;
            this.position.x += 3;
        }
    }
    if(player.is_attacking && !player.is_forward){
        if(dist(player.translateX -15, player.position.y + 22.5, this.centerX, this.centerY) < 30){
            this.health--;
            this.position.x -= 3;
            
        }
    }
}

