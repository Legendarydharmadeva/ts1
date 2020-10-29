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

	//level 1
	block1 = new Block(220,275,30,40);
	block2 = new Block(250,275,30,40);
	block3 = new Block(280,275,30,40);
	block4 = new Block(310,275,30,40);
	block5 = new Block(340,275,30,40);
	block6 = new Block(370,275,30,40);
	block7 = new Block(400,275,30,40);
    //level 2
	block8 = new Block(430,235,30,40);
	block9 = new Block(460,235,30,40);
	block10 = new Block(490,235,30,40);
	block11 = new Block(520,235,30,40);
	block12 = new Block(550,235,30,40);
	//level 3
	block13 = new Block(580,195,30,40);
	block14 = new Block(610,195,30,40);
	bolck15 = new Block(640,195,30,40);
	//top
	block16 = new Block(670,155,30,40);

	slingShot = new SlingShot(polygon.body,{x:150, y:150});

	polygon = new Polygon(150,150,40,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

    block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();

	slingshot.display();

	polygon.display();

  drawSprites();
 
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    Slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon.body, {x: 200 , y: 50});
       slingshot.attach(polygon.body);
    }
}


