class BallClass{
    constructor(bodyA, bodyB,) {
        var options = {
            bodyA:body1,
            pointB:body2,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
      }
      display(){
        push();
        eclipseMode(CENTER);
        eclipse(2);
        pop();
      }
}