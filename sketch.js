//Global Variables
var monkey,monkey_img;
var banana,bananaGroup,banana_img;
var obstacles,obstacleGroup;
var background1;
var score

function preload(){
  monkey_img=loadAnimation("Monkey_03.png,Monkey_04.png,Monkey_05.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png,Monkey_02.png,Monkey_01.png");
  banana_img=loadImage("Banana.png");
  obstacle=loadImage("stone");
  background1=loadImage("jungle.jpg");
}


function setup() {
  createCanvas(600,300);
  monkey=createSprite(200,200);
  backround1=createSprite(300,300);
}


function draw(){
 background(255); 
  
  drawSprites;
}