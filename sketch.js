
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	boyImg = loadImage("Sprites/boy.png")
}

function setup() {
	createCanvas(1350, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(900,450,350,300)
	ground = new Ground(600,600,1500,20)

	mango1 = new Mango(800,380,25)
	mango2 = new Mango(850,360,25)
	mango3 = new Mango(910,350,25)
	mango4 = new Mango(920,400,25)
	mango5 = new Mango(950,370,25)
	mango6 = new Mango(970,360,25)
	mango7 = new Mango(1000,365,25)

	stone = new Stone(350,550,30)
	boySling = new SlingShot(stone.body, {x:350, y:500})
boy = createSprite(400,550)
boy.addImage(boyImg)
boy.scale = 0.1

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  tree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  stone.display()
  ground.display()
  
Drop(stone,mango1)
Drop(stone,mango2)
Drop(stone,mango3)
Drop(stone,mango4)
Drop(stone,mango5)
Drop(stone,mango6)
Drop(stone,mango7)
 
 drawSprites()
}

function mouseDragged(){
        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    boySling.fly();
    
}

function Drop(object1, object2){
var distance = dist(object1.body.position.x, object1.body.position.y, object2.body.position.x, object2.body.position.y )
if (distance<=object1.radius+object2.radius){
	Matter.Body.setStatic(object2.body, false)
}
}