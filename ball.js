class Ball {

    constructor(x, y, radius) {
        
        var options = {

            isStatic : false,
            'restitution' : 0.2,
            'friction' : 0.5,
            'density' : 1.2

        }

        this.body = Bodies.circle(x, y, radius/3, options);
        this.radius = radius;
        this.image = loadImage("paper.png");

        World.add(world, this.body);

    }

    display() {

        var pos = this.body.position;

        fill("purple");
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius, this.radius);

    }

}