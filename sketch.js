const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,mango1,tree,mango2,mango3,mango4,connector;

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
  mango1=new Mango(487,306,60,60);
  mango2=new Mango(549,213,60,60);
  mango3=new Mango(639,136,60,60);
  mango4=new Mango(691,259,60,60);
  tree=new Tree(591,369,420,710);
  connector=new Rope(mango1,mango2);
	ground=new Ground();
}


function draw() {
  background(0);
  Engine.update(engine);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  connector.display();
  ground.display();
}