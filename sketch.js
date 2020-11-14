//local variable
var monkey , monkey_running
var banana ,bananaImage,bananaGroup,obstacle, obstacleImage,obstaclesGroup
var ground;
var FoodGroup, obstacleGroup
var score;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  
   monkey=createSprite(50,343,20,50);
  monkey.addAnimation("running", monkey_running)
  monkey.scale=0.12;
  
  ground=createSprite(0,343,800,10);
  ground.velocityX=-4;
  console.log(ground.x)
  
  obstaclesGroup=createGroup();
  bananasGroup=createGroup();
  
  //monkey.setCollider("circle",0,0,20);
  //monkey.debug = true
  
  score=0;
  
}
  
function draw() {
background(rgb(114,238,222));
  
  if(ground.x < 0){
      ground.x = ground.width/2;
    }

  if(keyDown("space") && monkey.y >= 50) {
     monkey.velocityY = -7.9;
  }
  
  if(bananasGroup.isTouching(monkey)){
    score=score+1
    bananasGroup.destroyEach();
  }
  
  var SurvivalTime=0
  stroke("black");
  fill("black");
  text("score: "+score,100,70)
  
  stroke("black");
  textSize(20);
  fill("black");
  
  SurvivalTime=Math.round(frameCount/frameRate())
  text("SurvivalTime:"+SurvivalTime,100,50)
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  
  
  
  obstacle();
   food();
  
  drawSprites();
  //text(mouseX+","+mouseY,mouseX,mouseY);
}

function obstacle(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(400,339,10,60);
   obstacle.y = Math.round(random(333,335));
   obstacle.collide(ground);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.2;
   obstaclesGroup.add(obstacle);
   //obstacle.setCollider("circle",0,0,60);
   //obstacle.debug = true
   obstacle.lifeTime=354;
  
 }    
}

function food(){ 
  if (frameCount % 100 === 0) {
    var banana = createSprite(400,238,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.12;
    banana.velocityX = -3;
    bananasGroup.add(banana);
    banana.lifeTime=200;
    //banana.setCollider("circle",0,0,200);
    //banana.debug = true
}
} 

