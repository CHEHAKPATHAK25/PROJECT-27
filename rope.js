class Rope {
    constructor (body1,body2) {
        var options = {
            bodyA : body1,
            bodyB : body2,
            stiffness : 0.04,
            length : 40
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display () {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        push();
        strokeWeight (3);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}