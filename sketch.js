var bg, bgImg; 
var explorador, exploradorImg;
var dinosaurio, dinosaurioImg;
var tucan, tucanImg;
var baloo, balooImg;
var puerta, puertaImg;
var trampolin, trampolinImg;
var gameState = "play";

function preload(){

bgImg = loadImage ("Img/fondo.png");  
exploradorImg = loadImage ("Img/explorador.png"); 



}

function setup(){
createCanvas (windowWidth, windowHeight);
//Imagen de fondo
bg = createSprite (displayWidth/2-20, displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.velocityX = -4;
bg.scale = 1.3;


//creamos al explorador
explorador = createSprite (100,530,30,30); 
explorador.addAnimation ("explorador.png",exploradorImg);
explorador.velocityY = 4; 
explorador.scale = 0.25;

}

function draw(){
    background (0);
    if (gameState === "play"){
        if (keyDown("SPACE")){
            explorador.velocity = -2;
        }
        if (keyDown("UP_ARROW")){
            explorador.y = -2;
            explorador.x = +2;
        }
        if (keyDown("DOWN_ARROW")){
            explorador.y = 2;
        }
        


    }
    
 explorador.velocityY = 4;

 //explorador.y = World.mouseY;


explorador.velocityY = explorador.velocity+0.8

//codigo para fondo
if (bg.x<400){
    bg.x = bg.width/2;
}

drawSprites();
}

