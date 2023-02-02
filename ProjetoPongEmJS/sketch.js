//Ball Atributes
let ballX = 400;
let ballY = 300;
let ballDiameter = 25;
let ballRadius = ballDiameter / 2;
//Ball Move Atributes
let speedX = 5;
let speedY = 5;
let moveX = ballX + speedX;
//Player Atributes
let playerRacketX = 10;
let playerRacketY = 300;
let playerRacketWidth = 10;
let playerRacketHeight = 90;
let playerMovementY;

function act() {
  drawBall();
  drawPlayerRacket();
  movimentation();
  bounceAtEdge();
  playerRacketMovement();
}
function bounceAtEdge() {
  if (ballX - ballRadius < 0 || ballX + ballRadius > width) {
    speedX *= -1;
  }
  if (ballY - ballRadius < 0 || ballY + ballRadius > height) {
    speedY *= -1;
  }
}
function movimentation() {
  ballX += speedX;
  ballY += speedY;
}
function drawBall() {
  circle(ballX, ballY, ballDiameter);
}
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);
  act();
}
function drawPlayerRacket(){
  rect(playerRacketX, playerRacketY, playerRacketWidth, playerRacketHeight);
}
function playerRacketMovement(){
if (keyIsDown(UP_ARROW)){
  playerRacketY -= 10;
}
if (keyIsDown(DOWN_ARROW)){
  playerRacketY += 10;
}
}