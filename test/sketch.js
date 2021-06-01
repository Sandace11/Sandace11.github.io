let osc, playing, freq, amp, play = false;
let capture;
let ctracker;
let distance;

function setup() {
  let cnv = createCanvas(400, 300);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
  capture = createCapture(VIDEO);
  capture.size(400, 300);
  capture.hide();
  
  ctracker = new clm.tracker();
  ctracker.init();
  ctracker.start(capture.elt);
}

function draw() {
  background(220);
  image(capture, 0, 0);
  
  let positions = ctracker.getCurrentPosition();
  if(positions) {
       let top = createVector(positions[60][0], positions[60][1]);
       let bottom = createVector(positions[53][0], positions[53][1]);
       distance = dist(top.x, top.y, bottom.x, bottom.y);
    positions.forEach(pos => {
      circle(pos[0], pos[1], 5);
    });
  }
  
  
  if(play == false && distance > 15) {
    play = true;
    playOscillator();
  } else if(play == true && distance < 15) {
    play = false;
    stop();
  }
  
  freq = constrain(map(distance || 10, 10, 30, 100, 500), 100, 500);
  // console.log(play + " Started : " + osc.started);
  
  if (play) {
    console.log(freq);
    osc.freq(freq, 0.1);
  }
  
  
}

function playOscillator() {
  osc.amp(1, 0.5);
  osc.start();
  play = true;
}

function stop() {
  osc.amp(0, 0.5);
  play = false;
}