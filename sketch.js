
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var  bob1, bob2, bob3, bob4, bob5; 
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof.createSprite(60,300,40,300);

	bob1 = new Ball(100,360,20);
	bob2 = new Ball(100,420);
	bob3 = new Ball(100,480);
	bob4 = new Ball(100,540);
	bob5 = new Ball(100,600);

	rope1 = new Rope(bob1.body, roof);
	rope2 = new Rope(bob2.body, roof);
	rope3 = new Rope(bob3.body, roof);
	rope4 = new Rope(bob4.body, roof);
	rope5 = new Rope(bob5.body, roof);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}