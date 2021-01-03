const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var ball;
var du1, du2, du3;
var dustbin, dustbinImg;

function preload() {

	dustbinImg = loadImage("dustbin.png");

}

function setup() {

	createCanvas(1600, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(200, 590, 10000, 20);

	ball = new Ball(300, 200, 50);

	du1 = new Dustbin(1260, 505, 20, 150);
	du2 = new Dustbin(1390, 505, 20, 150);
	du3 = new Dustbin(1325, 570, 100, 20);

	dustbin = createSprite(1325, 480, 20, 20);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.6

	Engine.run(engine);

}

function draw() {

	rectMode(CENTER);

	background("white");

	keyPressed();
	
	ball.display();
	ground.display();
	
	du1.display();
	du2.display();
	du3.display();

	drawSprites();

}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x : 1, y : -3})

	}

	if(ball.body.position.x >= 550){

		Matter.Body.applyForce(ball.body, ball.body.position, {x : 1, y : 3})

	}

}