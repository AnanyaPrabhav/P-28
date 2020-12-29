var boy, boyImg, mango, stone, tree, ground, mango1, mango2, mango3, launcher;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
	boyImg = loadImage("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600, 575, 300, 400);
	boy = new Boy(100, 700, 150, 250);
	ground = new Ground(width/2, 760, 800, 20);
	stone = new Rock(100, 640, 30, 25);
	mango1 = new Mango(550, 550, 10);
	mango2 = new Mango(595, 490, 10);
	mango3 = new Mango(680, 510, 10);
	launcher = new Launcher(stone.body, {x : 55, y : 635});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
	tree.display();
	boy.display();
	ground.display();
	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	launcher.display();

	hasCollided(stone, mango1);
	hasCollided(stone, mango2);
	hasCollided(stone, mango3);

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x: 55, y: 635});
		launcher.attach(stone.body);
	}
}

function hasCollided(s, m){
	var mPos = m.body.position;
	var sPos = s.body.position;

	var distance = dist(mPos.x, mPos.y, sPos.x, sPos.y);
	console.log(distance);

	if(distance <= s.r + m.r){
		Matter.Body.setStatic(m.body, false)
	}
}