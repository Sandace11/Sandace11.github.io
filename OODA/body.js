class Body {
   constructor(posX, posY, velX, velY, tickRate) {
      this.pos = createVector(posX, posY);
      this.vel = createVector(velX, velY);
      // this.preVel = createVector(velX, velY);
      this.acc = createVector(0, 0);
      this.tickRate = tickRate;
      this.tick = 0;

   }

   update(body) {
      // this.preVel = this.vel;
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      
      // if(this.tick > this.tickRate) {
         if(1) {
         force = p5.Vector.sub(body.pos, this.pos);
         // let plr = new p5.Vector(); 
         // plr.x = force.mag();
         // plr.y = degrees(force.heading());
         // // plr.y = constrain(plr.y, degrees(this.vel.heading()) + 30, degrees(this.vel.heading()) - 30);
         // console.log(degrees(this.vel.heading()));
         // let cart = new p5.Vector();
         // cart.x = plr.x * cos(radians(plr.y));
         // cart.y = plr.x * sin(radians(plr.y));
         
         // // push();
         // strokeWeight(0);
         // stroke(255);
         // // text(cart.x.toFixed(2) + "  " + cart.y.toFixed(2) , 400, 100);
         // // text(plr.x.toFixed(2) + "  " + plr.y.toFixed(2) , 400, 120);
         // text(plr.y, 400, 140);
         // pop();

         // let head = force.heading();
         // console.log(degrees(head));

         let d = force.mag();
         d = constrain(d, 8, 20);

         // strength = G / (d * d);
         strength = G / (2 * d * d);  // Testing with 3 times d
         force.setMag(strength);
         // cart.setMag(strength);
         this.applyForce(force);
         this.tick = 0;
      }

      if (this.pos.x >= width) {
         this.pos.x = 50;
         this.pos.y = 50;
      }
      if (this.pos.y >= height) {
         this.pos.x = 50;
         this.pos.y = 50;
      }
      if (this.pos.x < 0) {
         this.pos.x = width;
         this.pos.y = 50;
      }
      if (this.pos.y < 0) {
         this.pos.x = 50;
         this.pos.y = height;
      }
      
      this.tick++;
   }

   applyForce(force) {
      this.acc.add(force);
      
      //Line representing the direction of applied force
      //COLOR : GREEN
      push();
      stroke(0,255,0, 90);
      line(this.pos.x, this.pos.y, this.pos.x + force.normalize().x * 100,  this.pos.y + force.normalize().y * 100);
      pop();
   }
   
   display(body) {
      stroke(0);
      fill(175);
      // ellipse(this.pos.x, this.pos.y, 16, 16);
      // triangle(this.pos.x - 8,this.pos.y -4, this.pos.x  + 8, this.pos.y -4, this.pos.x , this.pos.y + 12);
      
      push()
      translate(this.pos);
      rotate(this.vel.heading()-radians(90));
      triangle(-8,-4, 8,-4,0,12);
      pop()
     
      //Line representing the direction of Velocity
      //COLOR : RED
      push();
      stroke(255,0,0);
      line(this.pos.x, this.pos.y, this.pos.x + this.vel.x * 100, this.pos.y + this.vel.y * 100);
      pop();
      

   }
}