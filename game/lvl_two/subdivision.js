//subdivision functions
var splitPoints = function (points, subdivided_points) {
    subdivided_points.splice(0, subdivided_points.length);
    for (var i = 0; i < points.length - 1; i++) {
        subdivided_points.push(new p5.Vector(points[i].x, points[i].y));
        subdivided_points.push(new p5.Vector((points[i].x + points[i + 1].x) / 2,
            (points[i].y +
                points[i + 1].y) / 2));
    }
    subdivided_points.push(new p5.Vector(points[i].x, points[i].y));
    subdivided_points.push(new p5.Vector((points[0].x + points[i].x) / 2, (points[0].y +
        points[i].y) / 2));
};
var average = function (points, subdivided_points) {
    for (var i = 0; i < subdivided_points.length - 1; i++) {
        var x = (subdivided_points[i].x + subdivided_points[i + 1].x) / 2;
        var y = (subdivided_points[i].y + subdivided_points[i + 1].y) / 2;
        subdivided_points[i].set(x, y);
    }
    var x = (subdivided_points[i].x + points[0].x) / 2;
    var y = (subdivided_points[i].y + points[0].y) / 2;
    points.splice(0, points.length);
    for (var i = 0; i < subdivided_points.length; i++) {
        points.push(new p5.Vector(subdivided_points[i].x, subdivided_points[i].y));
    }
};
var drawShape = function (points, subdivided_points) {
    beginShape();
    for (var i = 0; i < points.length; i++) {
        vertex(points[i].x, points[i].y);
    }
    vertex(points[0].x, points[0].y);
    endShape();
    if (subdivided_points.length < 100) {
        splitPoints(points, subdivided_points);
        average(points, subdivided_points);
    }
};