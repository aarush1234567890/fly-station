 var rocket,rocket_Image;
 var obstacle1,obstacle1_Image;
 var obstacle2,obstacle2_Image;
 var obstacle3,obstacle3_Image;
 var obstacle4,obstacle4_Image;
 var space,space_Image;
 var gameover,gameover_Image;
 var playState=1;
var endState=0;
var gameState=1;
var score=0;

 function preload(){
 rocket_Image = loadImage("shuttle.png");
 obstacle1_Image = loadImage("obstacle1.png");
 obstacle2_Image = loadImage("obstacle2.png");
  obstacle3_Image = loadImage("obstacle3.png");
 obstacle4_Image = loadImage("obstacle4.png");
 space_Image = loadImage("space.png");
 gameover_Image=loadImage("gameover.png");
} 
	 
function setup(){
 createCanvas(windowWidth,windowHeight);
	// Moving background 
	space=createSprite(1500/2,1500);
	space.addImage(space_Image);
	 space.velocityY = 4; 
	rocket = createSprite(width/2,height-20,40,40);
	 rocket.addImage(rocket_Image);
	 rocket.scale=1;
	obstacle1G=new Group();
	obstacle2G=new Group();
	obstacle3G=new Group();
	obstacle4G=new Group();
 }

function draw() {
	 if(gameState===playState){
	 background(0);
	 rocket.x = World.mouseX;
	 edges= createEdgeSprites();
	 rocket.collide(edges);
	 //code to reset the background 
	 if(space.y > height ){
     space.y = height/2;
     }
	 createObstacle1(); 
	 createObstacle2();
	 createObstacle3(); 
	 createObstacle4();

	 if (obstacle1G.isTouching(rocket)) {
	  obstacle1G.destroyEach(); 
	  score=score + 50;
	} 
	else if (obstacle3G.isTouching(rocket)) { 
		obstacle3G.destroyEach();
		score=score + 100;
	}
	 else if(obstacle4G.isTouching(rocket)) {
		obstacle4G.destroyEach();
		score= score + 150; 
	}
	else{ 
		if(obstacle2G.isTouching(rocket)) {
		gameState=endState;
		gameover= createSprite(width/2,height/2,50,50);
		gameover.addImage("gameover_Image",endImg);
		rocket.x=width/2;
		rocket.y=height/2;
		rocket.scale=0.6;
		obstacle1G.destroyEach();
		obstacle2G.destroyEach();
		obstacle3G.destroyEach(); 
	    obstacle4G.destroyEach();
	    obstacle1G.setVelocityYEach(0);
	    obstacle2G.setVelocityYEach(0);
	    obstacle3G.setVelocityYEach(0);
		obstacle4G.setVelocityYEach(0);
    }
}
	drawSprites();
	textSize(20);
	fill(255);
	text("score: "+ score,width-150,30);
	}
	}

function createObstacle1() {
if (World.frameCount % 200 == 0) {
     var obstacle1 = createSprite(Math.round(random(50, width-50),40, 20, 20));
	  obstacle1.addImage(obstacle1_Image);
	  obstacle1.scale=0.3;
	  obstacle1.velocityY = 3;
	  obstacle1.lifetime = 180;
	  obstacle1G.add(obstacle1);
	}
	
}

function createObstacle2() {
	if (World.frameCount % 320 == 0) {
		 var obstacle2 = createSprite(Math.round(random(50, width-50),40, 20, 20));
		  obstacle2.addImage(obstacle2_Image);
		  obstacle2.scale=0.3;
		  obstacle2.velocityY = 3;
		  obstacle2.lifetime = 180;
		  obstacle2G.add(obstacle2);
		}
		
	}

	function createObstacle3() {
		if (World.frameCount % 410 == 0) {
			 var obstacle3 = createSprite(Math.round(random(50, width-50),40, 20, 20));
			  obstacle3.addImage(obstacle3_Image);
			  obstacle3.scale=0.3;
			  obstacle3.velocityY = 3;
			  obstacle3.lifetime = 180;
			  obstacle3G.add(obstacle3);
			}
			
		}

		function createObstacle4() {
			if (World.frameCount % 530 == 0) {
				 var obstacle4 = createSprite(Math.round(random(50, width-50),40, 20, 20));
				  obstacle4.addImage(obstacle4_Image);
				  obstacle4.scale=0.3;
				  obstacle4.velocityY = 3;
				  obstacle4.lifetime = 180;
				  obstacle4G.add(obstacle4);
				}
				
			}




