let axiom = "f";
let currentPos;
let prevPos;
let angle;
let count = 0;
let lengthOfLine;

function toCartasian(r, theta) {
	let cart = createVector(r * Math.cos((Math.PI / 180) * theta), r * Math.sin((Math.PI / 180) * theta));
	return cart;
}

function iterate(sen) {
	let nSen = "";
	for (let i = 0; i < sen.length; i++) {
		if (sen[i] == "f") {
			nSen += "f-h";
		} else if (sen[i] == "h") {
			nSen += "f+h";
		} else {
			nSen += sen[i];
		}
	}
	return nSen;
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	currentPos = createVector(width / 2, height / 2);
	prevPos = createVector(width / 2, height / 2);
	angle = 0;
	lengthOfLine = 80;
	background(0,0,0);
	colorMode(HSB);
	frameRate(3);
}

function draw() {
	if(count < 17) {
		render(axiom);
		currentPos.set(width/2, height/2);
		prevPos.set(width/2, height/2);
		axiom = iterate(axiom);
		count++;
		lengthOfLine *= 0.77;
	}
}

function render(sentence) {
	for (let i = 0; i < sentence.length; i++) {
		prevPos = currentPos;
		if (sentence[i] == "f" || sentence[i] == "h") {
			let tmp = toCartasian(lengthOfLine, angle);
			currentPos = tmp.add(prevPos);
			stroke((count*20) % 255, 255, 255);
			line(prevPos.x, prevPos.y, currentPos.x, currentPos.y);
		} else if (sentence[i] == "+") {
			angle += 90;
		} else if (sentence[i] == "-") {
			angle -= 90;
		}
		// console.log(sentence);
	}
	// console.log("EOC",);
	angle = 0;
}