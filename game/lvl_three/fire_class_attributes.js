/*
the ghosts from the level 3 boss uses the a star pathfinding algorithm used from earlier project
*/
//A star pathfinding algorithm
boss_fire.prototype.pathfinder = function () {
    if (this.done == 0) {
        if (this.openSet.length > 0) {
            var winner = 0;
            for (var i = 0; i < this.openSet.length; i++) {
                if (this.openSet[i].f < this.openSet[winner].f) {
                    winner = i;
                }
            }
            var current = this.openSet[winner];
            if (current == this.end) {

                this.currentPath = this.path;
                this.done = 1;
                this.setPath(this.currentPath);
                console.log("done");

            }
            removeFromArray(this.openSet, current);
            this.closedSet.push(current);
            var neighbors = current.neighbors;
            for (var i = 0; i < neighbors.length; i++) {
                var neighbor = neighbors[i];
                if (!this.closedSet.includes(neighbor) && !neighbor.wall) {
                    var tempG = current.g + 1;
                    var newPath = false;
                    if (this.openSet.includes(neighbor)) {
                        if (tempG < neighbor.g) {
                            neighbor.g = tempG;
                            newPath = true;
                        }
                    } else {
                        neighbor.g = tempG;
                        newPath = true;
                        this.openSet.push(neighbor);
                    }
                    if (newPath) {
                        neighbor.h = heuristic(neighbor, this.end);
                        neighbor.f = neighbor.g + neighbor.h;
                        neighbor.previous = current;
                    }
                }
            }
        } else {
            this.nosolution = true;
            this.reset();
        }
        if (!this.nosolution) {
            this.path = [];
            var temp = current;
            this.path.push(temp);
            while (temp.previous) {
                this.path.push(temp.previous);
                temp = temp.previous;
            }
            this.currentPath = this.path;
        }
        
    }
}
//reset enemy object for new end location
boss_fire.prototype.reset = function () {
    this.grid = new Array(this.cols);
    for (var i = 0; i < this.cols; i++) {
        this.grid[i] = new Array(this.rows);
    }
    for (var i = 0; i < this.cols; i++) {
        for (var j = 0; j < this.rows; j++) {
            this.grid[i][j] = new Spot(i, j);
            if (tilemap_lvl_three.tilemap[j][i] == 'b' || tilemap_lvl_three.tilemap[j][i] == 'l' || tilemap_lvl_three.tilemap[j][i] == 'r' || tilemap_lvl_three.tilemap[j][i] == 'g') {
                this.grid[i][j].wall = true;
            }
        }
    }
    for (var i = 0; i < this.cols; i++) {
        for (var j = 0; j < this.rows; j++) {
            this.grid[i][j].addNeighbors(this.grid);
        }
    }
    this.start = this.grid[floor(this.x / 20)][floor(this.y /20)];
    //this.grid[floor(this.x / 20)][floor(this.y / 20)].show(color(255,0,0));
    this.end = this.grid[floor(player.position.x / 20)][floor(player.position.y / 20)];
    if(this.end.wall == true){
        for(var i = 0; i < this.end.neighbors.length; i++){
           if(this.end.neighbors[i].wall == false){
                this.end = this.end.neighbors[i];
           }
        }
    }
    this.openSet.push(this.start);
    this.pathDone = 0;
    //this.startFollow = 0;
    this.currentPath = [];
    this.done = 0;
    this.nosolution = false;
}

//removes an element from the array
function removeFromArray(arr, element) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] == element) {
        arr.splice(i, 1);
      }
    }
  }
  
  //heuristic calculation
  function heuristic(a, b) {
    var d = abs(a.i - b.i) + abs(a.j - b.j);
    return d;
  }