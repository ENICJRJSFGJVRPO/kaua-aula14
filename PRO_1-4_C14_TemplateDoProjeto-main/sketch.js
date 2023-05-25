var bow , arrow,  scene;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var blueBalloon,redBalloon,greenBalloon,pinkBalloon;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  // carregue a imagem do balão verde
  green_balloonImage = loadImage("green_balloon0.png");
  // carregue a imagem do balão rosa
  pink_balloonImage = loadImage("pink_balloon0.png");
  // carregue a imagem do balão azul
  blue_balloonImage = loadImage("blue_balloon0.png");
  // carregue a imagem do balão azul

  
}



function setup() {
  createCanvas(400, 400);
  
  //crie o fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criando arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0    
}

function draw() {
 background(0);
  // chão em movimento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco em movimento
  bow.y = World.mouseY
  
   // soltar arco quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
    
  }
   
  //criando inimigos continuamente
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon ){
    case 1:greenBalloon();
    break;
    case 2:blueBalloon();
    break;
    case 3:redBalloon();
    break;
    case 4:pinkBalloon();
    break;
    default:break;
  }}
    
  drawSprites();
}


// Criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function blueBalloon(){
  blueBalloon = createSprite((5,30),20,20,20);
  blueBalloon.addImage(blue_balloonImage);
  blueBalloon.scale = 0.1;
  blueBalloon.velocityX = 1;
  blueBalloon.lifetime = 150;
 }
function greenBalloon(){
   greenBalloon = createSprite((5,30),20,20,20);
   greenBalloon.addImage(green_balloonImage);
   greenBalloon.scale = 0.1;
   greenBalloon.velocityX = 1;
   greenBalloon.lifetime = 150;
  }
function redBalloon(){
   redBalloon = createSprite((5,30),20,20,20);
   redBalloon.addImage(red_balloonImage);
   redBalloon.scale = 0.1;
   redBalloon.velocityX = 1;
   redBalloon.lifetime = 150;
  }
function pinkBalloon(){
   pinkBalloon = createSprite((5,30),20,20,20);
   pinkBalloon.addImage(pink_balloonImage);
   pinkBalloon.scale = 0.1;
   pinkBalloon.velocityX = 1;
   pinkBalloon.lifetime = 150;
  }




