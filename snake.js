function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;

  this.update = function() {
    this.x = this.x + this.xSpeed * gameScale;
    this.y = this.y + this.ySpeed * gameScale;

    this.x = constrain(this.x, 0, width - gameScale);
    this.y = constrain(this.y, 0, height - gameScale);
  }

  this.show = function() {
    fill(255);
    rect(this.x, this.y, gameScale, gameScale);
  }

  this.dir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }

}
