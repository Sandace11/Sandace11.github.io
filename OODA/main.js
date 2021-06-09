let b1, b2;

function setup() {
    createCanvas(800, 600);
    
    b1 = new Body(50, 50);
    b2 = new Body(100, 100);
}

function draw() {
    background(100);
    b.update();
    b.display();
  
}



function mousePressed() {
    wind = new p5.Vector(0.1,0);
    b.applyForce(wind);
}  