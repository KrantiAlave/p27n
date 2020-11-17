const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

var roofObj;
var bobObj1,bobObj2,bobObj3,bobObj4,bobObj5;
var roopObj1,roopObj2,roopObj3,roopObj4,roopObj5;

function setup() {
	createCanvas(1600, 700);
 rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

roofObj = new Roof(width/2,height/4,300,40);
 //Create The Bodies Here
 bobDiameter = 50;
 bobObj1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
 bobObj2 = new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
 bobObj3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
 bobObj4  =new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
 bobObj5 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

 roopObj1= new Roop(bobObj1.body,roofObj.body,-50*2,0);
 roopObj2= new Roop(bobObj2.body,roofObj.body,-25*2,0);
 roopObj3= new Roop(bobObj3.body,roofObj.body,-0*2,0);
 roopObj4= new Roop(bobObj4.body,roofObj.body,25*2,0);
 roopObj5= new Roop(bobObj5.body,roofObj.body,50*2,0);
  
	Engine.run(engine);
  
}

function draw() {
  background(100);

  rectMode(CENTER);
  Engine.update(engine);

  //To Display Bodies Here
  roopObj1.display();
  roopObj2.display();
  roopObj3.display();
  roopObj4.display();
  roopObj5.display();
  
  bobObj1.display();
  bobObj2.display();
  bobObj3.display();
  bobObj3.display();
  bobObj4.display();
  bobObj5.display();
  
  roofObj.display();

  //To Create Function For Up arrow
  keyPressed();
  
  drawSprites ();
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObj1.body,bobObj1.body.position,{x:-100,y:-100}); } 
} 




