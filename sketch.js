
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var shelveObj, stoneObj,groundObject;
var chimmy1,chimmy2,chimmy3,chimmy4,chimmy5,chimmy6,chimmy7,chimmy8,chimmy9;
var world,boy;

//Declare launcherObject and launchForce variable here
var luancherObject;
var luancherForce=100;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new Stone(235,420,30); 

	chimmy1=new Chimmy(1100,100,30);
  chimmy2=new Chimmy(1170,130,30);
	chimmy3=new Chimmy(1010,140,30);
	chimmy4=new Chimmy(1000,70,30);
	chimmy5=new Chimmy(1100,70,30);
	chimmy6=new Chimmy(1000,230,30);
  chimmy7=new Chimmy(900,230,40);
	chimmy8=new Chimmy(1140,150,40);
	chimmy9=new Chimmy(1100,230,40)
	
	shelveObj=new Shelves (1050,580);
	groundObject=new Ground(width/2,600,width,20);
  //create launcherObject here
  luancherObject = new Luancher(stoneObj.body,{x:235,y:420});

	Engine.run(engine);
}

function draw() {

  background(230);
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  stoneObj.display();
  
  chimmy1.display();
  chimmy2.display();
  chimmy3.display();
  chimmy4.display();
  chimmy5.display();
  chimmy6.display();
  chimmy7.display();
  chimmy8.display();
  chimmy9.display();
  
 
  groundObject.display();
  // display launcher object here
    
 
  luancherObject.display();

  detectollision(stoneObj,chimmy1);
  detectollision(stoneObj,chimmy2);
  detectollision(stoneObj,chimmy3);
  detectollision(stoneObj,chimmy4);
  detectollision(stoneObj,chimmy5);
  detectollision(stoneObj,chimmy6);
  detectollision(stoneObj,chimmy7);
  detectollision(stoneObj,chimmy8);
  detectollision(stoneObj,chimmy9);

}

//create mouseDragged function here
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}


//create mouseReleased function here
function mouseReleased(){
  luancherObject.fly();
}


//create keyPressed function here
function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
    luancherObject.attach(stoneObj.body);
  }
}


  function detectollision(lstone,lchimmy){

  chimmyBodyPosition=lchimmy.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, chimmyBodyPosition.x, chimmyBodyPosition.y)
  	if(distance<=lchimmy.r+lstone.r)
    {
  	  Matter.Body.setStatic(lchimmy.body,false);
    }

  }