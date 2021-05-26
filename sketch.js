const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bot, box1;
var bg;
var gameState = "onSling";

var score=0;

function setup(){
    var canvas = createCanvas(1200,500);
    background("black");
    engine = Engine.create();
    world = engine.world;


   
    platform = new Ground(1000, 350, 300, 20);
    bot = new ball(200, 300, 20);
    
    box1 = new box(1000, 310, 30, 50, "red");
    box1l = new box(1000-30, 310, 30, 50, "red");
    box1r = new box(1000+30, 310, 30, 50, "red");
    box2l = new box(1000-60, 310, 30, 50, "red");
    box2r = new box(1000+60, 310, 30, 50, "red");

    _2box1l = new box(1000-15, 260, 30, 50, "pink");
    _2box1r = new box(1000+15, 260, 30, 50, "pink");
    _2box2l = new box(1000-45, 260, 30, 50, "pink");
    _2box2r = new box(1000+45, 260, 30, 50, "pink");

    _3box1 = new box(1000, 210, 30, 50, "blue");
    _3box1l = new box(1000-30, 210, 30, 50, "blue");
    _3box1r = new box(1000+30, 210, 30, 50, "blue");

    _4box1l = new box(1000-15, 160, 30, 50, "green");
    _4box1r = new box(1000+15, 160, 30, 50, "green");

    _5box1 = new box(1000, 110, 30, 50, "yellow");
    slingshot = new sling(bot.body,{x:200, y:300});
    
}

function draw(){
    getBG();
    background(bg);
    Engine.update(engine);
    platform.display();

    bot.display();

    box1.display();
    box1l.display();
    box1r.display();
    box2l.display();
    box2r.display();

    _2box1l.display();
    _2box1r.display();
    _2box2l.display();
    _2box2r.display();

    _3box1.display();
    _3box1l.display();
    _3box1r.display();

    _4box1l.display();
    _4box1r.display();

    _5box1.display();
/*
    box1.score();
    box1l.score();
    box1r.score();
    box2l.score();
    box2r.score();

    _2box1l.score();
    _2box1r.score();
    _2box2l.score();
    _2box2r.score();

    _3box1.score();
    _3box1l.score();
    _3box1r.score();

    _4box1l.score();
    _4box1r.score();

    _5box1.score();
    
    slingshot.display();

    fill("white");
    stroke("grey");
    textSize(20);
    text("Score: " + score, 1000, 20);*/
}    

function mouseDragged(){
    if (gameState!=="launched"){
       Matter.Body.setPosition(bot.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
   slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bot.body);
       Matter.Body.setPosition(bot.body, {x: 200 , y: 300});
       gameState="onSling";
    }
  }
async function getBG(){
    var hour = (new Date()).getHours();
    if(hour>=6 && hour<=18){
        bg="grey";
    }
    else{
        bg = "black";
    }
}