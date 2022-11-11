title_screen_player.prototype._check_block = function () {
    if (in_lvl_one == true) {
        var posX = tilemap_lvl_one.position.x + 300
        for (var i = 0; i < blocks.length; i++) {
            //on top of block            
            if (posX + 20 > blocks[i].x && posX < blocks[i].x + 20 && dist(0, this.position.y, 0, blocks[i].y) < (40) && blocks[i].y > this.position.y && this.velocity.y >= 0) {
                this.position.y = blocks[i].y - 40;
                this.velocity.y = 0;
                this.jump = 0;
            }
            //goes off left ledge
            else if ((blocks[i].left_ledge || blocks[i].single_block) && blocks[i].x - posX > 20 && this.position.y == blocks[i].y - 40 && dist(posX, 0, blocks[i].x, 0) < (40)) {
                this.jump = 1;
            }
            //goes of right side of ledge
            else if ((blocks[i].right_ledge || blocks[i].single_block) && posX - blocks[i].x > 20 && this.position.y == blocks[i].y - 40 && dist(posX, 0, blocks[i].x, 0) < (40)) {
                this.jump = 1;
            }
            /*
            //under the block
            if (posX + 20 >= blocks[i].x && posX <= blocks[i].x + 20 && dist(0, this.position.y, 0, blocks[i].y) < (20) && blocks[i].y - 20 <= this.position.y ) {
                this.position.y = blocks[i].y + 20;
                this.velocity.y = 0;
                this.jump = 1;
            }
            */
        }
    }
}
title_screen_player.prototype._check_ground = function () {
    if (in_lvl_one == true) {
        var posX = tilemap_lvl_one.position.x + 300
        for (var i = 0; i < grounds.length; i++) {
            //on top of block            
            if (posX + 20 > grounds[i].x && posX < grounds[i].x + 20 && dist(0, this.position.y, 0, grounds[i].y) < (30) && grounds[i].y > this.position.y && this.velocity.y >= 0) {
                this.position.y = grounds[i].y - 30;
                this.velocity.y = 0;
                this.jump = 0;
            }
            //goes off left ledge
            if ((grounds[i].left_ledge) && grounds[i].x - posX > 20 && this.position.y == grounds[i].y - 30 && dist(posX, 0, grounds[i].x, 0) < (40)) {
                this.jump = 1;
            }
            //goes of right side of ledge
            if ((grounds[i].right_ledge) && posX - grounds[i].x > 20 && this.position.y == grounds[i].y - 30 && dist(posX, 0, grounds[i].x, 0) < (40)) {
                this.jump = 1;
            }
        }
    }
}
title_screen_player.prototype._attack = function () {

}