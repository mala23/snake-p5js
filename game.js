var snake;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
}

function draw() {
  background(51);
  snake.update();
  snake.show();
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
