const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object,box1,box2,g;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(100,300,50,70)
  box2=new Box(130,200,50,70)
  g=new Ground(200,390,400,10)
  
  
}

function draw() {
  background(0);  
  Engine.update(engine);
  box1.display();
  box2.display();
  g.display();
  
}