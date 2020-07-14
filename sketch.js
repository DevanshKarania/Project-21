var bullet,wall;
var speed,weight;
var thickness;
thickness=random(22,83);




function setup() {
  createCanvas(1300,400);
  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor="white";
  
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="80,80,80";
  speed=random(223,321);
  bullet.velocityX=speed;
  weight=random(30,52);
}

function draw() {
  background(0); 
  

if(collided(bullet,wall)){
  bullet .velocityX=0;
  var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

 if(damage>10){
   wall.shapeColor=color(255,0,0);
 }
 if(damage<10){
   wall.shapeColor=(0,255,0);
 }
}

drawSprites();
}

function collided(lbullet,lwall){
bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}