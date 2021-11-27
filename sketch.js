var garden,rabbit,appleL,orangeL, redL;
var gardenImg,rabbitImg, redImg, orangeImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Mover el fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//crear sprite de rabbit (conejo)
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
  var select_sprites = Math.round(random(1,3));
  if (frameCount%80==0){
    if (select_sprites==1){
      createApples();
    }
    else if (select_sprites==2){
      createOrange();
    }
    else {
      createred();
    }
  }
  drawSprites();
  
}
function createApples() {
  appleL = createSprite(random(50, 350),40, 10, 10);
  appleL.addImage(appleImg);
  appleL.scale=0.07;
  appleL.velocityY = 3;
  appleL.lifetime = 150;
    
  }
  function createOrange() {
    orangeL = createSprite(random(50, 350),40, 10, 10);
    orangeL.addImage(orangeImg);
    orangeL.scale=0.07;
    orangeL.velocityY = 3;
    orangeL.lifetime = 150;
      
    }
    function createred() {
      redL = createSprite(random(50, 350),40, 10, 10);
      redL.addImage(redImg);
      redL.scale=0.07;
      redL.velocityY = 3;
      redL.lifetime = 150;
        
      }
