var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box, edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1 = createSprite(0,580,360,30);
    surface1.shapeColor = ("cyan");
    surface2 = createSprite(295,580,200,30);
    surface2.shapeColor = ("red");
    surface3 = createSprite(515,580,200,30);
    surface3.shapeColor = ("green");
    surface4 = createSprite(740,580,200,30);
    surface4.shapeColor = ("orange");

    box = createSprite(random(20,750));
    //box.shapeColor = ("white");
    box.velocityX = 4;
    box.velocityY = 9;
}

function draw() {
    background("black");
     
    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        surface1.shapeColor = ("brown");
        box.shapeColor = ("brown");
        music.play();
       }
       if(surface2.isTouching(box) && box.bounceOff(surface2)){
           surface2.shapeColor = ("yellow");
           box.shapeColor = ("yellow");
           music.play();
          }
          if(surface3.isTouching(box) && box.bounceOff(surface3)){
           surface3.shapeColor = ("blue");
           box.shapeColor = ("blue");
           music.play();
          }
          if(surface4.isTouching(box) && box.bounceOff(surface4)){
           surface4.shapeColor = ("purple");
           box.shapeColor = ("purple");
           music.play();
          }  
       drawSprites();
}
function display(){
    box.display();
    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    music.play();
}