    //text("(" + this.translateX + ", " + this.position.y + ")", this.position.x, this.position.y - 20);
    text(this.health, this.position.x, this.position.y - 20);
    stroke('red'); // Change the color
    strokeWeight(3); // Make the points 10 pixels in size
    point(this.position.x, this.position.y);
    point(this.position.x, this.position.y + 45);
    point(this.position.x + 20, this.position.y);
    point(this.position.x + 20, this.position.y + 45);


        /*
    if (this.position.y >= 324.99) {
        this.position.y = 325;
        this.velocity.y = 0;
        this.jump = 0;
    }
    */

    fill(255);;
    if (this.is_attacking && this.is_forward) {
        stroke('red');
        strokeWeight(3);
        point(this.position.x + 40, this.position.y);
        point(this.position.x + 40, this.position.y + 45);
        point(this.position.x + 70, this.position.y);
        point(this.position.x + 70, this.position.y + 45);
        point(this.position.x + 55, this.position.y + 22.5);
    }
    if(this.is_attacking && !this.is_forward){
        stroke('red');
        strokeWeight(3);
        point(this.position.x , this.position.y);
        point(this.position.x , this.position.y + 45);
        point(this.position.x - 30, this.position.y);
        point(this.position.x - 30, this.position.y + 45);
        point(this.position.x - 15, this.position.y + 22.5);

    }


    //

    //enemy
    point(this.position.x, this.position.y);
    point(this.position.x, this.position.y + this.height);
    point(this.position.x + this.width, this.position.y);
    point(this.position.x + this.width, this.position.y + this.height);