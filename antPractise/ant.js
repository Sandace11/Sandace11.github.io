class Ant {
   constructor(posX_, posY_) {
      this.pos = createVector(posX_, posY_);
      this.vel = createVector();
      this.acc = createVector()
   }

   draw() {
      fill(255);
      //For testing
    //   if (this.pos.x >= 600) {
    //      this.pos.x = 50;
    //      this.pos.y = 50;
    //   }
    //   if (this.pos.y >= 600) {
    //      this.pos.x = 50;
    //      this.pos.y = 50;
    //   }
      //
      circle(this.pos.x, this.pos.y, 5);
   }

   update() {
      textSize(32);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.div(1.005);

      let mouse = createVector(mouseX, mouseY);
      let force = p5.Vector.sub(mouse, this.pos);
      let d = force.mag();

      d = constrain(d, 8, 25);
      var G = 50;
      var strength = G / (d * d);
      force.setMag(strength);


      this.acc.add(force);

      // this.acc.add(dis);

      //   this.acc.add(createVector(mouseX - this.pos.x, mouseY - this.pos.y)).normalize();
      //   text(mouse.x + "  " + mouse.y, 600, 70);
      text(this.vel.x.toFixed(2) + "  " + this.vel.y.toFixed(2), 400, 50);
      text(mouse.x.toFixed(2) + "  " + mouse.y.toFixed(2), 400, 80);
	textSize(20);
	text("Todo : add multiple entities, code", 400, 110);
	text("interaction between entities", 400, 140);
    //   text(dis.toFixed(2), 400, 110);

   }

}