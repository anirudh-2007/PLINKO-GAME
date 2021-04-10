var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //create division objects
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var a = 80; a <=180; a = a + 80) {
    divisions.push(new Divisions(a, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var b = 160; b <=280; b = b + 80) {
    divisions.push(new Divisions(b, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var c = 240; c <=380; c = c + 80) {
    divisions.push(new Divisions(c, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var d = 320; d <=480; d = d + 80) {
    divisions.push(new Divisions(d, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var e = 400; e <=580; e = e + 80) {
    divisions.push(new Divisions(e, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var f = 480; f <=680; f = f + 80) {
    divisions.push(new Divisions(f, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var g = 560; g <=780; g = g + 80) {
    divisions.push(new Divisions(g, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var h = 640; h <=880; h = h + 80) {
    divisions.push(new Divisions(h, height-divisionHeight/2, 10, divisionHeight));
  }


  //create 1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  //create 3rd row of plinko objects
  for (var o = 25; o <=width-20; o=o+50) { 
    plinkos.push(new Plinko(o,275));
  }

  
  //create 4th row of plinko objects
  for (var y = 25; y <=width-30; y=y+50) { 
    plinkos.push(new Plinko(y,375));
  }
 //create particle objects
 /* for (var i = random(25,775); i <=width-30; i=i+random(50,750)) { 
    particles.push(new Particle(i,-10));
  }*/

  /*for (var m = 25; m <=width-30; m=m+50) { 
    particles.push(new Particle(m,35));
  }*/

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //display the paricles 
  for (var m = 0; m < particles.length; m++) {
    particles[m].display();
  }

 /* if(frameCount%60 ===0){
    particles.push(new Particle(random(width/2-10 , width/2+10),10,10));
  }*/

  if(frameCount%60 ===0){
    particles.push(new Particle(random(20 ,700),10));
  }


}