/*
door class used for the door used to transfer each level
*/
var lvl_one_door_obj;
var lvl_two_door_obj;
var lvl_three_door_obj;
class door{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.open = 0;
        this.width = 80;
        this.height = 80;
    }
    draw(x, y) {
        //load character
        this.x = x;
        this.y = y;
        image(lvl_one_door, x, y);
        if(second() % 2 == 0){
            image(lvl_one_door_text, x- 40, y - 60);
        }
        //strokeWeight(10);
    }
}
