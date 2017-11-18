var snake;
var gameScale = 20;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
  frameRate(10);
  food = createVector(random(width), random(height));
}

function draw() {
  background(51);
  snake.update();
  snake.show();

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
  }
}
