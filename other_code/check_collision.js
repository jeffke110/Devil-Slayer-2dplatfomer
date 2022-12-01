for (var i = 0; i < blocks.length; i++) {

    //under the block
    if (posX + 20 >= blocks[i].x && posX + 20 <= blocks[i].x + 20 && dist(0, this.position.y, 0, blocks[i].y) < (20) && blocks[i].y <= this.position.y) {
        this.position.y = blocks[i].y + 20;
        this.velocity.y = 0;
        this.jump = 1;
    //on top
    } else if (posX + 20 >= blocks[i].x && posX + 20 <= blocks[i].x + 20 && dist(0, this.position.y, 0, blocks[i].y) < (45) && blocks[i].y > this.position.y && this.velocity.y >= 0 && this.jump > 0) {
        this.position.y = blocks[i].y - 45;     
        this.velocity.y = 0;
        this.jump = 0;
    //left edge
    } else if (posX < blocks[i].x && this.position.y == blocks[i].y - 45 && this.jump == 0) {
        this.jump = 1;
    }
    //goes of right side of ledge
    else if (posX + 20 > blocks[i].x + 20 && this.position.y == blocks[i].y - 45 && this.jump == 0) {
        this.jump = 1;
    }
}