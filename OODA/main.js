let b1, b2;
let  force, G, strength;

function setup() {
   createCanvas(800, 600);
   // ORG
   G = 10;
   const randomPosn1 = [Math.random() * width, Math.random() * height];
   const randomPosn2 = [Math.random() * width, Math.random() * height];
   b1 = new Body(randomPosn1[0], randomPosn1[1], 0.2, 0.1, 1);
   b2 = new Body(randomPosn2[0], randomPosn2[1], -0.5, 0.7, 1);

}

function draw() {
   background(100);
   push()
   fill(255);
   strokeWeight(0);
   text(b1.vel.x.toFixed(2) + "  " + b1.vel.y.toFixed(2) + "  " + b1.tick , 400, 50);
   text(b2.vel.x.toFixed(2) + "  " + b2.vel.y.toFixed(2) + "  " + b2.tick, 400, 80);
   pop();
   b1.update(b2);
   b2.update(b1);
   b1.display(b2);
   b2.display(b1);
}
