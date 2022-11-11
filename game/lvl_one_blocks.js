var blocks = [];
var blockObj;
var grounds = [];
var groundObj;

class block{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.hit = 0;
        this.right_ledge = false;
        this.left_ledge = false;
        this.single_block = false;
    }
    draw(x, y) {
        this.x = x;
        this.y = y;
        //load character
        
        image(lvl_one_block, this.x, this.y, 20, 20);
        //text(this.x + "-" + this.y, this.x - 10, this.y);
        //stroke('red'); // Change the color
        //strokeWeight(3); // Make the points 10 pixels in size
        //point(this.x, this.y);
    }
}
class ground{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.hit = 0;
        this.right_ledge = false;
        this.left_ledge = false;
    }
    draw(x, y) {
        //load character
        image(ground_img, x, y, 20);
        //if(this.right_ledge == true){
        //    text(this.x + "-" + this.y, this.x - 10, this.y);
        //}
        //stroke('red'); // Change the color
        //strokeWeight(3); // Make the points 10 pixels in size
        p//oint(this.x, this.y + 10);

    }
}
