let ant;

function setup() {
    createCanvas(800, 600);
    
    ant = new Ant(50, 300);
}

function draw() {
    background(100);
    ant.draw();
    ant.update();

}