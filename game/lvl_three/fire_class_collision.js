/*
collision function with the player keeping track of health 
*/
boss_fire.prototype.attack = function(){
    if(dist(this.centerX, this.centerY, player.position.x + player.width /2, player.position.y + player.height/2) < (40)){
        player.health -= .1;
    }
}
boss_fire.prototype.attack_collision = function(){
    if(player.is_attacking && player.is_forward){
        if(dist(player.position.x + 55, player.position.y + 22.5, this.centerX, this.centerY) < 20){
            this.health--;
            
        }
    }
    if(player.is_attacking && !player.is_forward){
        if(dist(player.position.x -15, player.position.y + 22.5, this.centerX, this.centerY) < 30){
            this.health--;
        
        }
    }
}