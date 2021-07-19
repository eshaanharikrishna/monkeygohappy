var bgimage,bg
var player,playerrunning
var ground
var foodgrp
var bannanaimg
var obstaclegrp
var obstacleimg
var score=0
function preload(){
  bgimage=loadImage("images/jungle.jpg")
  playerrunning=loadAnimation("images/Monkey_01.png","images/Monkey_02.png","images/Monkey_03.png","images/Monkey_04.png","images/Monkey_05.png","images/Monkey_06.png","images/Monkey_07.png","images/Monkey_08.png","images/Monkey_08.png","images/Monkey_09.png","images/Monkey_10.png")
  bannanaimage=loadImage("images/banana.png")
obstacleimg=loadImage("images/stone.png")
}
function setup() {
  createCanvas(800,400);
  bg=createSprite(0, 0, 800, 400);
  bg.scale=1.5
  bg.x=bg.width/2
  bg.velocityX=-4
  bg.addImage(bgimage)

  player=createSprite(100,340,10,10)
  player.addAnimation("running",playerrunning)
  player.scale=0.1

  foodgrp=new Group()
  obstaclegrp=new Group()

  ground=createSprite(400,380,800,20)

  



}

function draw() {
  background(255,255,255);  
  if(bg.x<100){
    bg.x=bg.width/2
  }
  spawnObstacles();
  spawnBannanas();
  if(keyDown("space")) {
    player.velocityY = -10;
    }
 player.velocityY = player.velocityY + 0.8
 if(foodgrp.isTouching(player)){
   foodgrp.destroyEach()
   score=score+2
   
 }
 switch(score) {
  case 4: player.scale=0.12;
          break;
  case 8: player.scale=0.13;
          break;
  case 12: player.scale=0.14;
          break;
  case 16: player.scale=0.15;
          break;
  case 20: player.scale=0.16;
          break;
  case 24: player.scale=0.17;
          break;
  default: break;
}
if(obstaclegrp.isTouching(player)){
  player.scale=0.08
}
player.collide(ground)


  drawSprites();
  text("score"+score,500,50)
}

function spawnBannanas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var bannana = createSprite(600,250,40,10);
    bannana.y = Math.round(random(120,250));
    bannana.addImage(bannanaimage);
    bannana.scale = 0.1
    bannana.velocityX = -3;
    
     //assign lifetime to the variable
    bannana.lifetime = 300;
    
    //adjust the depth
    bannana.depth = player.depth;
    player.depth = player.depth + 1;
    
    //add each cloud to the group
    foodgrp.add(bannana);
  }
  
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(800,350,40,10);
    obstacle.addImage(obstacleimg);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 300;
    
    //add each cloud to the group
    obstaclegrp.add(obstacle);
  }
  
}