let angle = 0;
let widthOfCube = 20;
let seperation = 21;
let minHeight = 50;
let maxHeight = 200;
let leftBound, rightBound, topBound, bottomBound;
let h;

let camX;
let camY;

function setup() {
    createCanvas(innerWidth, innerHeight, WEBGL);
    
    // camX = -asin(1/sqrt(3));
    // camX = -PI/4;
    // camY = 0;

    camX = 0.63;
    camY = -0.83;

    leftBound = -width/2 + 500;
    rightBound = width/2 - 500;
    topBound = -height/2 + 300;
    bottomBound = height/2;

    ortho();
}

function draw() {
    background(0);
    // orbitControl();
    // normalMaterial();
    rotateX(camX);
    rotateY(camY);

    

    for(let z = topBound; z < bottomBound; z += seperation) {  
        for(let x = leftBound; x < rightBound; x += seperation) {   
            push(); 
                h = map(sin(angle + x/70 - z/70), -1, 1, minHeight, maxHeight);
                fill(x + 200, z - 200, x - 100, 10);
                noStroke()
                translate(x, 0, z);
                box(widthOfCube, h, widthOfCube);
            pop();
        }
    }
    

    angle += 0.05;
}