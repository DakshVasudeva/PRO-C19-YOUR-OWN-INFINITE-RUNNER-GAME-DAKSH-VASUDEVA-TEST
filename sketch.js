let tiger,tigerRunning,deerImg,score,rock,rockImg,bgImg
let gameOverImg,restartImg,restart,gameOver,background

function preload(){
    
tigerRunning=loadAnimation("./tiger/tile000.png","./tiger/tile001.png","./tiger/tile002.png","./tiger/tile003.png","./tiger/tile004.png","./tiger/tile005.png","./tiger/tile006.png","./tiger/tile007.png")
//deerImg=loadImage("deerIMG.gif")
rockImg=loadImage("rock.png")
bgImg=loadImage("bg.png")
restartImg = loadImage("restart.png");
gameOverImg = loadImage("gameOver.png");
}

function setup() {
 createCanvas(200,500)
 
 //creating tiger
 tiger=createSprite(50,160,20,50)
 tiger.addAnimation("running",tigerRunning)
}

function draw() {
//background("black")
image(bgImg,width/2,height/2,200,500)
drawSprites()
}