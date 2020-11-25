var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
 // fixedRect = createSprite(400, 100, 50, 80);
  fixedRect = createSprite(100, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  //movingRect = createSprite(400, 800,80,30);
 movingRect = createSprite(1200, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
movingRect.velocityX = -5;
fixedRect.velocityX = +5;

}

function draw() {
  background(0,0,0);  
bounceOff(movingRect,fixedRect);
  
  drawSprites();
}

