const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var sling1,sling2,sling3,sling4,sling5;


function preload() {
	
}

function setup() {
    createCanvas(windowWidth/2,windowHeight/2);
    console.log(windowWidth/2, windowHeight/2);

    engine = Engine.create();
	world = engine.world;

    bob1 = new Pendulum(width/2,height/2,"Red");
    bob2 = new Pendulum(width/2+50,height/2,"Red");
    bob3 = new Pendulum(width/2+100,height/2,"Red");
    bob4 = new Pendulum(width/2+150,height/2,"Red");
    bob5 = new Pendulum(width/2+200,height/2,"Red");
    sling1 = new Sling(bob1.body, {x: width/2, y: height/2-100});
    sling2 = new Sling(bob2.body, {x: width/2+50, y: height/2-100});
    sling3 = new Sling(bob3.body, {x: width/2+100, y: height/2-100});
    sling4 = new Sling(bob4.body, {x: width/2+150, y: height/2-100});
    sling5 = new Sling(bob5.body, {x: width/2+200, y: height/2-100});

    Engine.run(engine);

}
function draw() {
    background("pink");
    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

    drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(bob1.body, {x: mouseX, y: mouseY});
}