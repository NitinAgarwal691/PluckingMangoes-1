class Rope{
    constructor(bodyA,bodyB) {
        var options ={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.3,
            length:120
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    display() {
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.body.bodyB.position.x,this.body.bodyB.position.y);
    }
}