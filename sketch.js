function preload()
{
	
}

function setup() {
	createCanvas(400, 400);




	//Create the Bodies Here.
	ball = createSprite(400, 350, 20, 20)

	wall1 = createSprite(400, 1, 800, 10)
	wall2 = createSprite(400, 699, 800, 10)
	wall3 = createSprite(1, 350, 10, 800)
	wall4 = createSprite(799, 350, 10, 800)
     

	wall1.visibile = false;
	wall2.visibile = false;
	wall3.visibile = false;
	wall4.visibile = false;
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball.velocityX = 0
  ball.velocityY = 0

  if(keyDown(UP_ARROW)){
	ball.velocityX = 0
	ball.velocityY = -20
  }
  if(keyDown(DOWN_ARROW)){
	ball.velocityX = 0
	ball.velocityY = 20
}
if(keyDown(LEFT_ARROW)){
	ball.velocityX = -20
	ball.velocityY = 0
}
if(keyDown(RIGHT_ARROW)){
	ball.velocityX = 20
	ball.velocityY = 0
}
if(ball.bounceOff(wall1)){
	ball.x=200
	bal.y=200
}

ball.bounceOff(wall1)
ball.bounceOff(wall2)
ball.bounceOff(wall3)
ball.bounceOff(wall4)
  drawSprites();
 
}



