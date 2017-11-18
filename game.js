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

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.update = function() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }

  this.show = function() {
    fill(255);
    rect(this.x, this.y, 10, 10);
  }

  this.dir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
}
