//CODE not used in project
var lvl_one_boss_obj;

var lvl_one_boss = function(x, y){
    this.position = new p5.Vector(x, y);
    this.velocity = new p5.Vector(0, 0);
    this.acceleration = new p5.Vector(0, 0);
    this.width = 168;
    this.height = 131;
    this.moveDown = true;
}
lvl_one_boss.prototype._draw = function(){
    image(demon_gif_edited, this.position.x, this.position.y);
    point(this.position.x, this.position.y);
    point(this.position.x + 168, this.position.y);
    point(this.position.x, this.position.y + 131);
    point(this.position.x + 168, this.position.y + 131);
}
lvl_one_boss.prototype._move = function(){
    if(this.moveDown == true){
        this.position.y++;
    }else{
        this.position.y--;
    }
    if(this.moveDown == true && this.position.y > 269){
        this.moveDown = false;
    }
    if(this.moveDown == false && this.position.y < 0){
        this.moveDown = true;
    }
}



