var hr
var hrAngle;
var sc;
var scAngle;
var min;
var minAngle;

function setup() {
  createCanvas(400,400);
angleMode(DEGREES);
}

function draw() {
  background(0); 

  

  hr=hour();
  sc=second();
  min=minute();

  translate(200,200);
  rotate(-90)

  scAngle=map(sc,0,60,0,360);
  hrAngle=map(hr % 12,0,12,0,360);
  minAngle=map(min,0,60,0,360);
  
  push();
  rotate(scAngle);
  stroke(235,145,53);
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  push();
  rotate(minAngle);
  stroke(247,247,247);
  strokeWeight(5);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(18,132,8);
  strokeWeight(5);
  line(0,0,50,0);
  pop();

  strokeWeight(10);
  noFill();
  stroke(235,145,53);
  arc(0,0,300,300,0,scAngle);
  stroke(247,247,247);
  arc(0,0,280,280,0,minAngle);
  stroke(18,132,8);
  arc(0,0,260,260,0,hrAngle);

  stroke(255,0,255);
  point(0,0);
}