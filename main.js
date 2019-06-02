var canvasMain = document.getElementById('canvas');
var ctx = canvasMain.getContext('2d');

function onload() {
  document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady() {
  document.addEventListener("pause", onPause, false);
  document.addEventListener("resume", onResume, false);
  test()
}

function onPause() {
  // onpaus things...
}

function onResume() {
    test()
}

//variabels
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;
var pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

var touch;
var high = 0;
var jumptest;

// load images
var ball = new Image();
var obs = new Image();

ball.src = "images/ball.png";
obs.src = "images/obs.png";

// onlaod runs one time and in the end runs draw with requestAnimationFrame
function test() {
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  windowWidth = window.innerWidth;
  windowHeight = window.innerHeight;
  pixelRatio = window.devicePixelRatio || 1; /// get pixel ratio of device

  // fixed canvas resolution
  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  // positions var
  bY = 546.1;
  bX = 43.1;
  oX = 853.1;
  oY = 928.2;

  gravity = 0.98;
  gravitySpeed = 0;
  bounce = 0.4;
  jump = 42;
  right = 5;

  draw()
}

// runs after test is finished and has an requestAnimationFrame
function draw() {

  canvasMain.width = windowWidth * pixelRatio;   /// resolution of canvas
  canvasMain.height = windowHeight * pixelRatio;
  canvasMain.style.width = windowWidth + 'px';   /// CSS size of canvas
  canvasMain.style.height = windowHeight + 'px';

  gravitySpeed += gravity;
  bY += gravitySpeed;
  hitbottom()
  move()
  stopjump()
  collision()

  //drawImage
  ctx.drawImage(ball, bX, bY);
  ctx.drawImage(obs, oX, oY);

  //requestAnimationFrame
  requestAnimationFrame(draw, 10);
}

document.getElementById("canvas").addEventListener("click", cl);

function hitbottom() {
  var rockbottom = canvasMain.height - 105;
  if (bY > rockbottom) {
    touch = true;
    bY = rockbottom;
    gravitySpeed = -(gravitySpeed * bounce);
    high = 0;
  }
}

function move() {
  if (touch === true) {
    bX += right;
  }
}

function cl() {
  if (jumptest === false) {
    gravitySpeed = -(jump * bounce);
  }
  high += 1;
  right = 5;
}

function stopjump() {
  if (high < 2) {
    jumptest = false;
  } else {
    jumptest = true;
  }
}

function collision() {
  if (bX + ball.width === oX && bY + ball.height >= oY) {
    right = 0;
  }

  if (bY + ball.height >= oY && bX >= oX && bX <= oX + obs.width) {
    bY = oY - ball.height;
    gravitySpeed = 0;
    high = 0;
  }
}

/*function counter() {
    var i = 0;
    var num = 0;
    // This block will be executed 100 times.
    setInterval(function(){
        if (i == 100) clearInterval(this);
        else num = num + 1; text = num;
    }, 1000);
} // End
counter()*/
