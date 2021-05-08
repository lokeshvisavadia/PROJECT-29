const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground1,ground2,polygon,box1,box2,box3;

function setup() {
  var canvar = createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

//  ground1 = new Ground(600,400,800,20);

 // polygon = Bodies.circle(50,200,20);
//World.add(world,polygon)

  //slingshot = new SlingShot(this.polygon,{x:100,y:200});
box1 = new Box(300,200,20,20);
box1.shapeColor(255);
}

function draw() {
  background(0);  
  drawSprites();
 // text(mouseX + ',' + mouseY,30,45);
    Engine.update(engine);
   // ground1.display();
   // slingshort.display();
   box1.display();
}