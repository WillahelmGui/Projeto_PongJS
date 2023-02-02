//Ball Atributes
let ballX = 400;
let ballY = 300;
let ballDiameter = 25;
let ballRadius = ballDiameter / 2;
//Ball Movimentation
let speedX = 5;
let speedY = 5;
let moveX = ballX + speedX;
//Player Racket Atributes
let playerRacketX = 10;
let playerRacketY = 300;
let racketWidth = 10;
let racketHeight = 90;
//Player Movimentation
let playerMovementY;
//Opponent Racket Atributes
let opponentRacketX = 780;
let opponentRacketY = 310;

let opponentRacketYMovimentationSpeed;
function act() {
  drawBall();
  drawRacket(playerRacketX, playerRacketY);
  drawRacket(opponentRacketX, opponentRacketY);
  movimentation();
  bounceAtEdge();
  playerRacketMovement();
  isTouchingRacket();
  opponentRacketMovimentation();
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
function drawRacket(X, Y) {
  rect(X, Y, racketWidth, racketHeight);
}

function playerRacketMovement() {
  if (keyIsDown(UP_ARROW)) {
    playerRacketY -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    playerRacketY += 10;
  }
}
function isTouchingRacket() {
  if (ballX - ballRadius < playerRacketX + racketWidth
    && ballY - ballRadius < playerRacketY + racketHeight
    && ballY + ballRadius > playerRacketY) {
    speedX *= -1;
  }
  if (ballX + ballRadius > opponentRacketX
    && ballY - ballRadius < opponentRacketY + racketHeight
    && ballY + ballRadius > opponentRacketY) {
    speedX *= -1;
  }
}
function opponentRacketMovimentation() {
  opponentRacketYMovimentationSpeed = ballY - opponentRacketY - racketHeight / 2 - 30;
  opponentRacketY += opponentRacketYMovimentationSpeed;
}
