
function Ball() {

    this.pos = createVector(screenSize.x/2, screenSize.y/2);
    this.velocity = createVector(0, ballVelocity);
    this.radius = 10;

    this.update = function() {
        this.pos.x += this.velocity.x;
        this.pos.y += this.velocity.y;
    }

    this.draw = function() {
        fill(255);
        arc(this.pos.x, this.pos.y, this.radius, this.radius, 0, 2*PI);

    }

    this.collison = function() {

        
        //Collison with Slider
        let mappedX;
        if(this.pos.x >= (slider1.pos.x - slider1.length/2) && this.pos.x <= (slider1.pos.x + slider1.length/2) && this.pos.y >= slider1.pos.y - this.radius ) {
            this.velocity.y *= -1;

            if(slider1.pos.x - this.pos.x >= 0) {
                mappedX = map(this.pos.x, slider1.pos.x - slider1.length/2, slider1.pos.x, -ballVelocity, 0);
            
            } else if(slider1.pos.x - this.pos.x < 0) {
                mappedX = - map(this.pos.x, slider1.pos.x, slider1.pos.x - slider1.length/2, 0, ballVelocity);
            }
            this.velocity.x = mappedX;

            // this.velocity.x *= -1;
        }


        //Collison with Wall
        if(this.pos.x - this.radius <= 0 || this.pos.x + this.radius >= screenSize.x)  {
            this.velocity.x *= -1;
        
        } else if(this.pos.y - this.radius <= 0) {
            this.velocity.y *= -1;

        } else if(this.pos.y - this.radius >= screenSize.y) {    //Ball passing through bottom of screen.
            playing = false;
            reset();
        }


        for(let i = 0; i < noOfColumns; i++) {
            for(let j = 0; j < noOfRows; j++) {
                if(bricks[i][j].isAlive == true) {
                    if(this.pos.x > bricks[i][j].pos.x && this.pos.x < bricks[i][j].pos.x + brickSize &&
                        this.pos.y > bricks[i][j].pos.y && this.pos.y < bricks[i][j].pos.y + brickSize) {
                            
                            bricks[i][j].isAlive = false;
                            graphicsCanvas.background(0);
                            for(let i = 0; i < noOfColumns; i++) {
                                for(let j = 0; j < noOfRows; j++) {
                                    bricks[i][j].draw();
                                }
                            }
                            image(graphicsCanvas, 0, 0);
                            
                            this.velocity.y *= -1;
                        }
                    }
                }
        }
    }
}