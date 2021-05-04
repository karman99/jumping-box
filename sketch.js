var canvas;
var music;
var bar ,bar1,bar2,bar3,ball
var edges
function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(1000,600);
    bar=createSprite(100,580,260,30)
    bar.shapeColor="green"
    bar1=createSprite(360,580,260,30)
    bar1.shapeColor="red"
    bar2=createSprite(615,580,260,30)
    bar2.shapeColor="blue"
    bar3=createSprite(870,580,260,30)
    bar3.shapeColor="yellow"
    ball=createSprite(random(20,750),100,40,40)
    ball.velocityX=4
    ball.velocityY=7
    ball.shapeColor="black"
    
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges= createEdgeSprites()
    ball.bounceOff(edges)
    if(ball.isTouching(bar)&&ball.bounceOff(bar)){
        ball.shapeColor="green"
        music.play()
    }
    if(ball.isTouching(bar1)&&ball.bounceOff(bar1)){
        ball.shapeColor="red"
        music.play()
    }
    if(ball.isTouching(bar2)&&ball.bounceOff(bar2)){
        ball.shapeColor="blue"
        music.play()
    }
    if(ball.isTouching(bar3)&&ball.bounceOff(bar3)){
        ball.shapeColor="yellow"
        music.play()
    }
    //create edgeSprite



   drawSprites()
    //add condition to check if box touching surface and make it box
}
