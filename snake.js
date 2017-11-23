function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 1;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];

  this.eat = function(position) {
    var d = dist(this.x, this.y, position.x, position.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    if (this.total === this.tail.length) {
      for (var i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xSpeed * gameScale;
    this.y = this.y + this.ySpeed * gameScale;

    this.x = constrain(this.x, 0, width - gameScale);
    this.y = constrain(this.y, 0, height - gameScale);
  }

  this.show = function() {
    fill(255);
    for (var i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, gameScale, gameScale);
    }
    rect(this.x, this.y, gameScale, gameScale);
  }

  this.dir = function(x, y) {
    this.xSpeed = x;
    this.ySpeed = y;
  }
}
