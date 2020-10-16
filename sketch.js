var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rectangle1,rectangle2,rectangle3,rect1sprite,rect2sprite,rect3sprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.5

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
    // Create a PackageBody
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
	
    rectangle1 = Bodies.rectangle(350,670,200,20,{isStatic:true}); 
    World.add(world,rectangle1);
	
	rect1sprite=createSprite(rectangle1.position.x,rectangle1.position.y,200,20)

	rect1sprite.shapeColor=color(255,0,0);
	var widthRect = 20
	var heightRect = 100
	rectangle2 = Bodies.rectangle(240,630,widthRect,heightRect,{isStatic:true})
	
	rect2sprite = createSprite(rectangle2.position.x,rectangle2.position.y,widthRect,heightRect);

	rect2sprite.shapeColor=color(255,0,0);
	World.add(world,rectangle2);
	rectangle3 = Bodies.rectangle(440,630,widthRect,heightRect);

	rect3sprite = createSprite(440,630,widthRect,heightRect);

	rect3sprite.shapeColor= color(255,0,0);
	World.add(world,rectangle3);
	Engine.run(engine);
    
}



function draw() {
  rectMode(CENTER);
   background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}


function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	packageBody.restitution = 0;
    
  }
  
}



