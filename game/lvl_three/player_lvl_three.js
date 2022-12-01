/*
collision functions for the player and the blocks for the tilemap in level 3
*/

title_screen_player.prototype._check_three_block = function () {
    if (in_lvl_three == true) {
        for (var i = 0; i < blocks.length; i++) {
            //on top of block            
            if (this.position.x + 20 > blocks[i].x && this.position.x  < blocks[i].x + 20 && dist(0, this.position.y, 0, blocks[i].y) < (40) && blocks[i].y > this.position.y && this.velocity.y >= 0) {
                this.position.y = blocks[i].y - 40;
                this.velocity.y = 0;
                this.jump = 0;
            }
            //goes off left ledge
            else if ((blocks[i].left_ledge || blocks[i].single_block) && blocks[i].x - this.position.x  > 20 && this.position.y == blocks[i].y - 40 && dist(this.position.x , 0, blocks[i].x, 0) < (40)) {
                this.jump = 1;
            }
            //goes of right side of ledge
            else if ((blocks[i].right_ledge || blocks[i].single_block) && this.position.x  - blocks[i].x > 20 && this.position.y == blocks[i].y - 40 && dist(this.position.x , 0, blocks[i].x, 0) < (40)) {
                this.jump = 1;
            }
        }
    }
}
title_screen_player.prototype._check_three_ground = function () {
    if (in_lvl_three == true) {
        for (var i = 0; i < grounds.length; i++) {
            //on top of block            
            if (this.position.x + 20 > grounds[i].x && this.position.x < grounds[i].x + 20 && dist(0, this.position.y, 0, grounds[i].y) < (30) && grounds[i].y > this.position.y && this.velocity.y >= 0) {
                this.position.y = grounds[i].y - 30;
                this.velocity.y = 0;
                this.jump = 0;
            }
            //goes off left ledge
            if ((grounds[i].left_ledge) && grounds[i].x - this.position.x > 20 && this.position.y == grounds[i].y - 30 && dist(this.position.x, 0, grounds[i].x, 0) < (40)) {
                this.jump = 1;
            }
            //goes of right side of ledge
            if ((grounds[i].right_ledge) && this.position.x - grounds[i].x > 20 && this.position.y == grounds[i].y - 30 && dist(this.position.x, 0, grounds[i].x, 0) < (40)) {
                this.jump = 1;
            }
        }
    }
}
title_screen_player.prototype._check_three_door = function () {

}