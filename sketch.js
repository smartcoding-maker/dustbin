
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,680,800,20)
    paper=new Paper(100,670,45)
    left=new Dustbin(550,620,20,100)
    bottom=new Dustbin(610,660,100,20)
    right=new Dustbin(670,620,20,100)

	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  Engine.update (engine)
  ground.display();
  paper.display();
  left.display();
  bottom.display();
  right.display();
  drawSprites();
 
}



