var snake;
var food;
var gameScale = 20;

function setup() {
  createCanvas(600, 600);
  frameRate(10);
}

function startGame() {
  snake = new Snake();
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / gameScale);
  var rows = floor(height / gameScale);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(gameScale);
}

function draw() {
  background(51);
  snake.deadYet();
  snake.update();
  snake.show();

  if (snake.eat(food)) {
    pickLocation();
  } 

  fill(255, 0, 100);
  rect(food.x, food.y, gameScale, gameScale);
}

function keyPressed() {
  if (keyCode === 87) {
    snake.dir(0, -1);
  } else if (keyCode === 65) {
    snake.dir(-1, 0);
  } else if (keyCode === 83) {
    snake.dir(0, 1);
  } else if (keyCode === 68) {
    snake.dir(1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  }
}
