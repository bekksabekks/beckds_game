var ballx = 100;
var bally = -30;
var ballSize = 30;
var speed = 3;
var circleSize = 40;

let isPlaying = false;
let levelOneComplete = false;
let levelTwoComplete = false;
let levelThreeComplete = false

class character {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = 15;
  }
  
  show() {
    circle(mouseX, mouseY, this.r*2)
  }
}

class obst {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.r = 15;
  }

  show() {
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  fall() {
    this.y = this.y + 2;
    if (this.y > height) {
    this.y = -30;
    }
  }
  fall2() {
    this.y = this.y + 3;
    if (this.y > height) {
      this.y = -30;
    }
  }
  fall3() {
    this.y = this.y + 4;
    if (this.y > height) {
      this.y = -30;
    }
  }
  fall4() {
    this.y = this.y + 5;
    if (this.y > height) {
      this.y = -30;
    }
  }
}


class endball {
  constructor(x, y, size) {
  this.x = x;
  this.y = y;
  this.size = size;
  }
  
  show() {
    ellipse(this.x, this.y, this.size);
  }
}

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20)
  
  obst1 = new obst(100, bally, ballSize, ballSize);
  obst2 = new obst(225, bally, ballSize, ballSize);
  obst3 = new obst(375, bally, ballSize, ballSize);
  obst4 = new obst(500, bally, ballSize, ballSize);
  chara = new character(mouseX, mouseY, circleSize, circleSize);
}

function draw() {
  background(226);
  
 if (isPlaying === false) {
   showStartScreen();
 } else {
   levelOne();
 }
  
  if (levelOneComplete === true) {
    levelTwo();
  }
  
  if (levelTwoComplete === true) {
    levelThree();
  }
  
  if (levelThreeComplete === true) {
    youWin();
  }

}

function showStartScreen() {
  background(0);

  textAlign(CENTER, CENTER);
  textFont('Courier New');
  textSize(16);
  fill(0, 255, 0);

  if (isPlaying === false) {
    text('Can you please dodge my balls.', width/2, 40);
    text('Please. Pleasepleaseplease.', width/2, 60);
    text('I got all these balls around here I dunno what to do with em', width/2, 80);
    text('Please', width/2, 100);
    text('Press Y to start. Right now.', width/2, 120);
  }
}
  
function keyPressed() {
  if (key === 'y') {
    isPlaying = true;
  }
}

function levelOne(){
  text("Level One", width/2,height-20);
  
  chara.show();
  
  obst1.show();
  obst2.show();
  obst3.show();
  obst4.show();
  
  obst1.fall();
  obst2.fall3();
  obst3.fall2();
  obst4.fall4();
  
  var d = dist(obst1.x,obst1.y,mouseX,mouseY);  
  if (d < obst1.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  var d2 = dist(obst2.x,obst2.y,mouseX,mouseY);
  if (d2 < obst2.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  var d3 = dist(obst3.x,obst3.y,mouseX,mouseY);
  if (d3 < obst3.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  var d4 = dist(obst4.x,obst4.y,mouseX,mouseY);
  if (d4 < obst4.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  
  if (mouseX > 600) {
    levelOneComplete = true;
    levelTwo();
  }
}

function levelTwo(){
  background(0);
  text("Level Two", width/2,height-20);
  
  chara.show();
  
  obst1.show();
  obst2.show();
  obst3.show();
  obst4.show();
  
  obst1.fall2();
  obst2.fall3();
  obst3.fall4();
  obst4.fall2();
  
  var d = dist(obst1.x,obst1.y,mouseX,mouseY);  
  if (d < obst1.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  var d2 = dist(obst2.x,obst2.y,mouseX,mouseY);
  if (d2 < obst2.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  var d3 = dist(obst3.x,obst3.y,mouseX,mouseY);
  if (d3 < obst3.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  var d4 = dist(obst4.x,obst4.y,mouseX,mouseY);
  if (d4 < obst4.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  
  if (mouseX < 15) {
    levelTwoComplete = true;
    levelThree();
  }
}

function levelThree() {
  background(50);
  text("Level Three", width/2,height-20);

  chara.show();
  
  obst1.show();
  obst2.show();
  obst3.show();
  obst4.show();
  
  obst1.fall();
  obst2.fall4();
  obst3.fall2();
  obst4.fall3();
  
  var d = dist(obst1.x,obst1.y,mouseX,mouseY);  
  if (d < obst1.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  var d2 = dist(obst2.x,obst2.y,mouseX,mouseY);
  if (d2 < obst2.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  var d3 = dist(obst3.x,obst3.y,mouseX,mouseY);
  if (d3 < obst3.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  var d4 = dist(obst4.x,obst4.y,mouseX,mouseY);
  if (d4 < obst4.r + chara.r) {
    isPlaying = false;
    gameOver();
  }
  
  if (mouseX > 600) {
    levelThreeComplete = true;
    youWin();
  }
}

function youWin() {
  background(255);
  
  noStroke();
  fill(32);
  rect(0, 0, 600, 400);
  fill(255);

  textAlign(CENTER);
  text('You win yaaaaayyyy yippeee wahooo.', width/2, height/2);
  text('Theres no prize btw. Are you mad at me.', width/2, 300);
  isPlaying = false;
  noLoop();
}

function gameOver() {
  background(0);
  
  noStroke();
  fill(32);
  rect(0, 0, 600, 400);
  fill(255);

  textAlign(CENTER);
  text('Game over. Refresh the page and do it again.', width/2, height/2);
  isPlaying = false;
  noLoop();
}