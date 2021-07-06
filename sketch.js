const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20);
    point = new Ground(400,100,100,20);

    box1 = new Box(740,720,70,70);
    box2 = new Box(740,640,70,70);
    box3 = new Box(740,560,70,70);
    box4 = new Box(740,490,70,70);
    box5 = new Box(740,420,70,70);
    box6 = new Box(820,720,70,70);
    box7 = new Box(820,640,70,70);
    box8 = new Box(820,570,70,70);
    box9 = new Box(920,420,70,70);
    box10 = new Box(920,490,70,70);
    box11 = new Box(920,460,70,70);
    box12 = new Box(920,540,70,70);
    box13 = new Box(650,420,70,70);
    box14 = new Box(650,490,70,70);
    box15 = new Box(650,540,70,70);
    
    ball = new bob(100,50,80); 

    string = new rope(point.body,ball.body);

}

function draw(){
    background(200);
    Engine.update(engine);

    ground.display();
    point.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();

    ball.display();

    string.display();
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

