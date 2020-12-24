let hueValues = [];
let temp;
let i = 0;
const RADIUS = 250;
const INCREMENTS = 1;

function setup() {
    createCanvas(window.innerWidth,window.innerHeight);

    for (let ang = 0; ang <= 360 / INCREMENTS; ang += 1) {
        hueValues[ang] = random(360);
    }
    
    drawColorWheel();
}

function draw() {
    background(0);
    colorMode(HSB);
    translate(width/2, height/2);

    bubbleSort();

    drawColorWheel();
}

function drawColorWheel() {
    for(let ang = 0; ang <= 360; ang += INCREMENTS) {
        let x = RADIUS * Math.cos(radians(ang));
        let y = RADIUS * Math.sin(radians(ang));
        stroke(hueValues[ang / INCREMENTS], 100, 100);
        line(0, 0, x, y);
    }
}

function bubbleSort() {
    if(i < hueValues.length) {
        for(let j = 0; j < hueValues.length-1-i; j++){
    
            if(hueValues[j] > hueValues[j+1]) {
                temp = hueValues[j];
                hueValues[j] = hueValues[j+1];
                hueValues[j+1] = temp;
            }

        }
        i++;
    
    }
}



