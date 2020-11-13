class Mango {
   constructor(x,y,r){
   var options={
    'isStatic':true,
    'restitution':0,
    'friction':1
   }
   this.r=r;
   this.x=x;
   this.y=y;
   this.image = loadImage("mango.png");
   this.body=Matter.Bodies.circle(this.x,this.y,this.r,options);
   World.add(world,this.body);
   }
   display() {
   push();
   //rectMode(RADIUS);
   fill("red");
   translate(this.body.position.x,this.body.position.y);
   //rotate(this.body.angle); 
   imageMode(CENTER);
   image(this.image, 0,0,this.r,this.r);
   //ellipse(0,0,this.r,this.r);
   pop();
   }
}