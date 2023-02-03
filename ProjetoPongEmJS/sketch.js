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
//Scoreboard
let playerPoints = 0;
let opponentPoints = 0;

let opponentRacketYMovimentationSpeed;
function act() {
  drawMiddleLines();
  drawBall();
  drawRacket(playerRacketX, playerRacketY);
  drawRacket(opponentRacketX, opponentRacketY);
  moveBall();
  movePlayerRacket();
  moveOpponentRacket();
  rotateAtEdge();
  isTouchingRacket();
  showScoreboard();
  scoredPoint();
}
function rotateAtEdge() {
  if (ballX - ballRadius < 0 || ballX + ballRadius > width) {
    speedX *= -1;
  }
  if (ballY - ballRadius < 0 || ballY + ballRadius > height) {
    speedY *= -1;
  }
}
function moveBall() {
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
function drawMiddleLines() {
  rect(400, 0, 10, 80);
  rect(400, 100, 10, 80);
  rect(400, 200, 10, 80);
  rect(400, 300, 10, 80);
  rect(400, 400, 10, 80);
  rect(400, 500, 10, 80);
}

function movePlayerRacket() {
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
function moveOpponentRacket() {
  opponentRacketYMovimentationSpeed = ballY - opponentRacketY - racketHeight / 2 - 30;
  opponentRacketY += opponentRacketYMovimentationSpeed;
}
function showScoreboard() {
  text("Pontos: " + playerPoints, 200, 10);
  fill(255, 255, 255);
  text("Pontos: " + opponentPoints, 600, 10)
  fill(255, 255, 255)
}
function resetBallPosition(){
ballX = 400;
ballY = 300;
}
function scoredPoint() {
  if (ballX - ballRadius < 1)
    playerPoints++;
   resetBallPosition();
  if (ballX + ballRadius > 799) {
    opponentPoints++;
    resetBallPosition();
  }
}
