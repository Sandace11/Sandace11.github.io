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
    
    quickSort(hueValues, 0, hueValues.length-1);
}

function draw() {
    background(0);
    colorMode(HSB);
    translate(width/2, height/2);
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

async function quickSort(arr, start, end) {
    if(start >= end) {
        return;
    }
    let pivot = arr[Math.floor((start + end)/2)];
    // let pivot = arr[Math.floor(random(end))];
    let index = await partition(arr, start, end, pivot);
    await quickSort(arr, start, index-1);
    await quickSort(arr, index, end);
}

async function partition(arr, start, end, pivot) {

    while(start <= end) {
        while(arr[start] < pivot) {
            start++;
        }
    
        while(arr[end] > pivot) {
            end--;
        }
    
        if(start <= end) {
            await swap(arr, start, end);
            start++;
            end--;
        }
    }

    return start;

}

async function swap(arr, a, b) {
    await sleep(20);

    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

