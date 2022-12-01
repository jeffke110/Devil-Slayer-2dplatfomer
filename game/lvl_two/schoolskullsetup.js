
//global variables
var schoolOne = [];
var schoolTwo = [];


var schoolSkullDraw = function () {
    for (let boid of schoolOne) {
        boid.edges();
        boid.flock(schoolOne);
        boid.update();
        boid.show();
    }
    for (let boid of schoolTwo) {
        boid.edges();
        boid.flock(schoolTwo);
        boid.update();
        boid.show();

    }

};

function school_skull_setup(){
    for (let i = 0; i < 5; i++) {
        schoolOne.push(new Boid(300, 0));
    }
    for (let i = 0; i < 5; i++) {
        schoolTwo.push(new Boid(0, 0));
    }

}

function school_skull_draw(){
    schoolSkullDraw();
}