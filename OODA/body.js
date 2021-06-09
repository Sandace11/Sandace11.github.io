class Body {
   constructor(posX, posY) {
      this.pos = createVector(posX, posY);
      this.vel = createVector(0.1, 0.1);
      this.acc = createVector(0, 0);
   }

}