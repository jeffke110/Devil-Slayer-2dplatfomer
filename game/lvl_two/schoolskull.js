//movement class for each skull, so that it moves using flocking mechanics
class Boid {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(random(4, 6));
        this.acceleration = createVector();
        this.maxForce = .1;
        this.maxSpeed = 2;
        this.skull = new skull(this.position.x, this.position.y);
    }
    align(boids) {
        let perceptionRadius = 45;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other != this && d < perceptionRadius) {
                steering.add(other.velocity);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);

        }
        return steering;
    }
    cohesion(boids) {
        let perceptionRadius = 1;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other != this && d < perceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);

        }
        return steering;
    }
    separation(boids) {
        let perceptionRadius = 10;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.position.x,
                this.position.y,
                other.position.x,
                other.position.y);
            if (other != this && d < perceptionRadius) {
                let diff = p5.Vector.sub(this.position, other.position);
                diff.mult(d);
                steering.add(diff);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);

        }
        return steering;
    }
    flock(boid) {
        this.acceleration.mult(0);
        let alignment = this.align(boid);
        let cohesion = this.cohesion(boid);
        let separation = this.separation(boid);
        this.acceleration.add(separation);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
    }
    show() {
        if (this.skull.health > 0) {
            this.skull.x = this.position.x;
            this.skull.y = this.position.y;
            this.skull.display();
            this.skull.attack();
            this.skull.attack_collision();
        }
    }
    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
    }
    edges() {
        if (this.position.x > player.translateX + 300) {
            //this.position.x = 0;
            this.position.x = player.translateX + 300;
            this.velocity.x = -this.velocity.x;
            this.velocity.y = -this.velocity.y;
        } else if (this.position.x < player.translateX - 300) {
            //this.position.x = width;
            this.position.x = player.translateX + 300;
        }
        if (this.position.y > height) {
            //this.position.y = 0;
            this.position.y = height;
            this.velocity.x = -this.velocity.x;
            this.velocity.y = -this.velocity.y;
        } else if (this.position.y < 0) {
            //this.position.y = height;
            this.position.y = 0;
            this.velocity.x = -this.velocity.x;
            this.velocity.y = -this.velocity.y;
        }
    }
}