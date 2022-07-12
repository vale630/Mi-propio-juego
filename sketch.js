var bg, bgImg; 
var explorador, exploradorImg;
var dinosaurio, dinosaurioImg;
var tucan, tucanImg;
var baloo, balooImg;


function preload(){

bgImg = loadImage  ("Img/fondo.png");  
exploradorImg = loadImage ("Img/explorador.png"); 



}

function setup(){
createCanvas (windowWidth, windowHeight);
//Imagen de fondo
bg = createSprite (displayWidth/2-20, displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 1.3;

explorador = createSprite (130,200,30,30); 
explorador.addAnimation("explorador.png");
explorador.scale = 0.25;

}

function draw(){
 drawSprites();

  
}