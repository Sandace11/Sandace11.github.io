function Slider() {

    this.pos = createVector(400 , windowHeight - 30);
    this.length = 100;
    this.height = 10;


    this.update = function() {
        if(mouseX > screenSize.x - this.length/2) {
            this.pos.x = screenSize.x - this.length/2;
        } else if(mouseX < 0 + this.length/2) {
            this.pos.x = 0 + this.length/2;
        } 
        
        else {
            this.pos.x = mouseX;
        }
    };

    this.draw = function() {
        
        fill(255);
        rectMode(CENTER);
        rect(this.pos.x, windowHeight - 30, this.length, this.height);
        rectMode(CORNER);
        
    };
}