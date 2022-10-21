var demon_gif;
var demon_object;
var fire_skull_gif;
var fire_skull_object;


class enemy {
    constructor(x, y){
        this.x = x;
        this.y = y;
    }
    _fly_left(){
        this.x--;
        if(this.x < -150){
            this.x = 700;
            this.y = random(100, 150);
        }
    }
    _fly_right(){
        this.x++;
        if(this.x > 650){
            this.x = -50;
            this.y = random(0, 50);
        }
    }
}

function enemies_movement_function(){
    demon_object._fly_left();
    fire_skull_object._fly_right();
}
function enemies_variable_init(){
    demon_object = new enemy(625,100);
    fire_skull_object = new enemy(-50, 50);
}
function preload_enemy_images() {
    demon_gif = loadImage("../assets/enemies/demon-idle.gif");
    fire_skull_gif = loadImage("../assets/enemies/__eye_edited.gif");
}
function load_enemy_movement(){
    image(demon_gif, demon_object.x, demon_object.y);
    image(fire_skull_gif, fire_skull_object.x, fire_skull_object.y);
}