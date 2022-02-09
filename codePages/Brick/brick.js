function Brick(x, y) {

    this.pos = createVector(x * brickSize, y * brickSize);
    this.isAlive = true;
    this.color = createVector(map(x, 0, noOfColumns, 0, 255), map(y, 0, noOfRows, 0, 255), 100);

    this.draw = function() {
        if(this.isAlive) {
        graphicsCanvas.fill(this.color.x, this.color.y, this.color.z);
        graphicsCanvas.strokeWeight(2);
        graphicsCanvas.rect(this.pos.x, this.pos.y, brickSize, brickSize);
        strokeWeight(0);
        }
    }
}