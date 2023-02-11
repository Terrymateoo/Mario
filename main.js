function preload() {
	gameO = loadSound("gameover.wav");
	jump = loadSound("jump.wav");
	coin = loadSound("coin.wav");
	kick = loadSound("kick.wav");
	StartS = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("cnv")
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('WC')
	pn = ml5.poseNet(video, loaded);
	pn.on('pose', TheResults);
}

function loaded() {
	console.log("PoseNet started succesfully!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
}

function TheResults(results) {
	if(results.length > 0) {
		console.log(results);
		NoseX = results[0].pose.nose.x;
		NoseY = results[0].pose.nose.y;
	}
}

function draw() {
	game();
}