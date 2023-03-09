
var rocketImg,rocket;
var bombImg,bomb;
var starImg,star;
var space
function preload(){
rocketImg = loadImage("rocket.png");
bombImg = loadImage("bomb.png");
starImg = loadImage("star.png");
spaceImg = loadImage("space.png");
    
}

function setup() {
    createCanvas(600,600);
    spookySound.loop();
    space = createSprite(300,300);
    space.addImage("space",spaceImg);
    space.velocityY = 1;

    bombsGroup = new Group();
  invisibleBlockGroup = new Group();
  
    rocket = createSprite(200,200,50,50);
    rocket.scale = 0.3;
    rocket.addImage("rocket", rocketImg);


}

function draw() {
    background(255);}
   if(space.y > 10){
        space.y = 300
      } 
    
    if (gameState === "play") {
    }
      if(keyDown("Left_arrow")){
          rocket.x = rocket.x - 3;
  
        //  move left when left arrow is pressed
      }
      if(keyDown("Right_arrow")){
    
            rocket.x = rocket.x + 3;
  
        // move right when right arrow is pressed
        
      }
      if(keyDown("space")){
    
           rocket.velocityY = -10;
  
        // up when space arrow is pressed
        
      }
    // Gravity of rocket
  rocket.velocityY = rocket.velocityY + 0.8;
    
     
        //a condition for infinte scrolling space
      if(space.y){
        space.y = 300;
      }

      spawnBombs();

      if(bombsGroup.isTouching(rocket)){
      rocket.velocityY = 0;
      }
      if(invisibleBlockGroup.isTouching(rocket) || rocket.y > 600){
       rocket.destroy();
        gameState = "end"
      }
      drawSprites();
    {
      if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game Over", 230,250)
      }
    }
{
    if (frameCount % 240 === 0) {
        var bomb = createSprite(200, -50);
        var invisibleBlock = createSprite(200,15);
        invisibleBlock.width = bomb.width;
        invisibleBlock.height = 2;
    

//change the depth of the rocket and bomb
rocket.depth = bomb.depth;
rocket.depth =1;

//assign lifetime for the  bomb and invisible block
bomb.lifetime = 800;
invisibleblock.lifetime = 800;

bombGroup.add();
invisibleBlock.debug = true;
invisibleBlockGroup.add();
    }
}



