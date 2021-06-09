class Body {
   constructor(posX, posY) {
      this.pos = createVector(posX, posY);
      this.vel = createVector(0.1, 0.1);
      this.acc = createVector(0, 0);
   }

   update() {
      text(this.vel.x.toFixed(2) + "  " + this.vel.y.toFixed(2), 400, 50);
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
   }

   
}