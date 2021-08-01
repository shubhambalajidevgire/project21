var wall,thickness
var bullet ,speed, weight


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 25);
  wall = createSprite(1200,200,thickness,height/2);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)

  bullet.velocityX = speed;

}

function draw() {
  background("black"); 
  
  if(wall.x-bullet.x <(bullet.width+wall.width)/2){
    bullet.velocityX = 0;
   

  if(hascollided(bullet,wall))
  bullet.velocityX=0
  var damage=5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor =(255,0,0)
  }
  if(damage<10){
    wall.shapeColor =(0,255,0)
  }
}
drawSprites();
}

function hascollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false
}
