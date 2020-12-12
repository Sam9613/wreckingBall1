
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var myworld,myengine;

function setup() {
  createCanvas(800,400);
 myengine=Engine.create();
 myworld=myengine.world
 ground=new Ground(400,390,800,10);
 ball=new Ball(200,100,50);
box1=new Box(400,150,50,50);
box2=new Box(400,200,50,50);
box3=new Box(400,250,50,50);
box4=new Box(400,300,50,50);
box5=new Box(400,350,50,50);
box6=new Box(450,150,50,50);
box7=new Box(450,200,50,50);
box8=new Box(450,250,50,50);
box9=new Box(450,300,50,50);
box10=new Box(450,350,50,50);
Engine.run(myengine)
}

function draw() {
  background("black"); 
 ground.show();
 box1.show();
 box2.show();
 box3.show();

 box4.show();
 box5.show();
 box6.show();
 box7.show();
 box8.show();
 box9.show();
box10.show();
ball.show();
  drawSprites();
}


  function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}



