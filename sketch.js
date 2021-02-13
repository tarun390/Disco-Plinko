var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles
var plinkos = [];
var divisions=[];

var divisionHeight=300;
var score =0;
var turn=0;

const PLAY=1;
const END=0;
var gameState=PLAY;

var bg;

function setup() {
  createCanvas(800, 1200);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,1195,1200,20);

   for (var k =1; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 45; j <=width; j=j+50) {
       plinkos.push(new Plinko(j,475,10));
    }

    for (var j = 20; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,175,10));
    }

    for (var j = 45; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,275,10));
    }

    for (var j = 20; j <=width-10; j=j+50) {
        plinkos.push(new Plinko(j,375,10));
    }

    for (var j = 20; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,575,10));
    }

    for (var j = 45; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,675,10));
    }

    for (var j = 20; j <=width; j=j+50) {
        plinkos.push(new Plinko(j,775,10));
    }    
}
 


function draw() {
  background(0);

  Engine.update(engine);
 
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 
 
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   ground.display();

   textSize(30);
   fill("white")
   text("Score : "+score,20,35);

   if(particles!=null){
     particles.display();

     if(particles.body.position.y>1140){
       if(particles.body.position.x<400){
         score=score+500;
         if(turn===5){
           gameState=END;
         }
       }
      
  
       if(particles.body.position.x>401&&particles.body.position.x<600){
          score=score+100;
          if(turn===5){
            gameState=END;
          }
       }

       if(particles.body.position.x>601&&particles.body.position.x<900){
         score=score+200;
         if(turn===5){
           gameState=END;
         }
       }
       particles=null;

     }
   }

   if(gameState===END){
     push();
     textSize(50);
     fill("red")
     text("GAME OVER",200,200);
     pop();
     push();
     textSize(45);
     stroke("green")
     strokeWeight(4);
     text("Press 'Space' Key to Restart",100,340)
     pop();
   }

   fill("white")
   textSize(32);
   text("500",16,950);
   text("500",96,950);
   text("500",96+80,950);
   text("100",97+162,950);
   text("100",98+243,950);
   text("100",78+343,950);
   text("200",58+443,950);
   text("200",108+543,950);
   text("200",119+453,950);
   text("200",108+643,950);
   
}


function mousePressed(){
  if(gameState!==END)
  {
    turn=turn+1;
    particles=new Particle(mouseX,10,10,10);

  }
}

function keyPressed(){
  if(keyCode===32)
  {
    score=0;
    turn=0;
    gameState=PLAY;
  }
}
