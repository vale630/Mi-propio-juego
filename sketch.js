var bg, bgImg; 
var explorador, exploradorImg;
var dinosaurio, dinosaurioImg;
var tucan, tucanImg;
var baloo, balooImg;
var puerta, puertaImg;
var trampolin, trampolinImg;


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
 explorador.velocityY = 4;

 explorador.y = World.mouseY;

//codigo para fondo
if (bg.x<0){
    bg.x = bg.width/8;
}

drawSprites();
}

