//Canvas
let graphicsCanvas;
let cnv;

//game objects
let slider1;
let ball1;
var bricks = [[],[]];

let sectors = [[],[],[]];

//Properties
let screenSize;
let playing;
let ballVelocity = 8 ;
let brickSize = 20;

let noOfRows;
let noOfColumns;

//TEST VARIABLES

function setup() {
    screenSize = createVector(800, windowHeight);
    cnv = createCanvas(screenSize.x, screenSize.y);
    graphicsCanvas = createGraphics(screenSize.x, screenSize.y);
    
    cnv.position((windowWidth - width) / 2, (windowHeight - height) / 2);
    graphicsCanvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);

    frameRate(60);

 // Row lai column lekhexu and v.v
    noOfColumns = screenSize.x/brickSize;
    // noOfColumns = (screenSize.y/2) / brickSize;
    noOfRows = 15;

    slider1 = new Slider();
    ball1 = new Ball();
    createBricks();
    
    playing = false;

}

function draw() {
    background(0);

    image(graphicsCanvas, 0, 0);

    //TEST DOTS
    // for(let x = 0; x < noOfColumns; x++) {
    //     for(let y = 0; y < noOfRows; y++) {
    //         fill(255);
    //         arc(x * brickSize, y * brickSize, 5, 5, 0, 2*PI);
    //     }
    // }
    
    slider1.update();
    slider1.draw();

    if(playing == true) {
        ball1.draw();
        ball1.collison();
        ball1.update();
    } else {
        ball1.draw();
    }

    textSize(32);
    text("x: " + (ball1.velocity.x).toFixed(2) + " y: " + ball1.velocity.y , 600, 50);
}

function reset() {
    ball1.pos.x = screenSize.x/2;
    ball1.pos.y = screenSize.y/2;
    ball1.velocity.x = 0;
    ball1.velocity.y = ballVelocity;
}

function mousePressed() {
    if(!playing) {
        reset();
        playing = true;
    }
}

function createBricks() {
    for(let i = 0; i < noOfColumns; i++) {
        for(let j = 0; j < noOfRows; j++) {
            bricks[i] = bricks[i] || [];
            bricks[i][j] = new Brick(i,j);
            bricks[i][j].draw();
        }
    }
    image(graphicsCanvas, 0, 0);
}






