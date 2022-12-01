/*
class used for all blocks and ground objects in the game (for collision detetection, etc...)
*/
class lvl_one_block_class{
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
        stroke('red'); // Change the color
    }
}
class lvl_one_ground_class{
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
        stroke('red'); // Change the color
    }
}
