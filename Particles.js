class Particle {
    constructor(x, y) {
        var options = {
            restitution: 0.65,
            density:0.25,
            friction: 0,
            isStatic:false
        }
        this.r = 8.5;
        this.body = Bodies.circle(x, y, this.r, options);
        this.color = color(random(0,255),random(0,200),random(100,100));
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
       // imageMode(CENTER);
        fill(this.color)
        noStroke();
       // fill(random("green","yellow","blue","pink","red"));
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }

};