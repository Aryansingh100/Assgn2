var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var messageDiv = document.getElementById("message1");
var startBtn = document.getElementById("start-btn");
var pauseBtn = document.getElementById("pause-btn");
var restartBtn = document.getElementById("restart-btn");
var animationId;
var gameRunning = false;

startBtn.addEventListener("click", function() {
  if (!gameRunning) {
    gameRunning = true;
    loop();
  }
});

pauseBtn.addEventListener("click", function() {
  gameRunning = false;
  cancelAnimationFrame(animationId);
});

restartBtn.addEventListener("click", function() {
  document.location.reload();
});

addEventListener("load", (event) => {
  draw();
});

// Ball values
var ballRadius = 10;
var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballSpeedX = 5;
var ballSpeedY = 5;

// Paddle values
var paddleHeight = 80;
var paddleWidth = 10;
var leftPaddleY = canvas.height / 2 - paddleHeight / 2;
var rightPaddleY = canvas.height / 2 - paddleHeight / 2;
var leftPaddleSpeed = 10;
var rightPaddleSpeed = 2;

// Score Values
var leftPlayerScore = 0;
var rightPlayerScore = 0;
var maxScore = 20;

document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

var upPressed = false;
var downPressed = false;

function keyDownHandler(e) {
  if (e.key === "ArrowUp") {
    upPressed = true;
  } else if (e.key === "ArrowDown") {
    downPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === "ArrowUp") {
    upPressed = false;
  } else if (e.key === "ArrowDown") {
    downPressed = false;
  }
}

function update() {
  if (upPressed && leftPaddleY > 0) {
    leftPaddleY -= leftPaddleSpeed;
  } else if (downPressed && leftPaddleY + paddleHeight < canvas.height) {
    leftPaddleY += leftPaddleSpeed;
  }

  if (ballY > rightPaddleY + paddleHeight / 2) {
    rightPaddleY += Math.min(rightPaddleSpeed, ballY - (rightPaddleY + paddleHeight / 2));
  } else if (ballY < rightPaddleY + paddleHeight / 2) {
    rightPaddleY -= Math.min(rightPaddleSpeed, (rightPaddleY + paddleHeight / 2) - ballY);
  }

  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }

  if (
    ballX - ballRadius < paddleWidth &&
    ballY > leftPaddleY &&
    ballY < leftPaddleY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }

  if (
    ballX + ballRadius > canvas.width - paddleWidth &&
    ballY > rightPaddleY &&
    ballY < rightPaddleY + paddleHeight
  ) {
    ballSpeedX = -ballSpeedX;
  }

if (ballX < 0 && rightPlayerScore == 0) {
    rightPlayerScore++;
    messageDiv.textContent = "AI got a point.";
    messageDiv.style.fontSize = "20px";
    messageDiv.style.color = "red";
    messageDiv.style.textAlign = "right";
    reset();
} else if (ballX < 0 && rightPlayerScore == 1) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 2";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
        reset();
} else if (ballX < 0 && rightPlayerScore == 2) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 3";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
        reset();
} else if (ballX < 0 && rightPlayerScore == 3) {
        rightPlayerScore++;
        messageDiv.textContent = "Another one! Score = 4";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
        reset();
} else if (ballX < 0 && rightPlayerScore == 4) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 5";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
        reset();
} else if (ballX < 0 && rightPlayerScore == 5) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 6";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
        reset();     
} else if (ballX < 0 && rightPlayerScore == 6) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 7";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
        reset();           
} else if (ballX < 0 && rightPlayerScore == 7) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 8";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
        reset();   
} else if (ballX < 0 && rightPlayerScore == 8) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 9";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
        reset();   
} else if (ballX < 0 && rightPlayerScore == 9) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 10";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 10) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 11";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 11) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 12";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 12) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 13";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 13) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 14";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 14) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 15";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 15) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 16";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 16) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 17";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 17) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 18";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 18) {
        rightPlayerScore++;
        messageDiv.textContent = "AI has another point. Score = 19";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
} else if (ballX < 0 && rightPlayerScore == 19) {
        rightPlayerScore++;
        messageDiv.textContent = "AI won the game.";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "red";
        messageDiv.style.textAlign = "right";
  reset();  
       
  
} else if (ballX > canvas.width && leftPlayerScore == 0) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has a point.";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
  reset();
} else if (ballX > canvas.width && leftPlayerScore == 1) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 2";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 2) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 3";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 3) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 4";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 4) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 5";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 5) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 6";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 6) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 7";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 7) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 8";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 8) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 9";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 9) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 10";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 10) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 11";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 11) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 12";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 12) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 13";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 13) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 14";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 14) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 15";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 15) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 16";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 16) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 17";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 17) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 18";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 18) {
        leftPlayerScore++;
        messageDiv.textContent = "Player has another point. Score = 19";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
} else if (ballX > canvas.width && leftPlayerScore == 19) {
        leftPlayerScore++;
        messageDiv.textContent = "Player won the game";
        messageDiv.style.fontSize = "20px";
        messageDiv.style.color = "blue";
        messageDiv.style.textAlign = "left";
reset();
}

  if (leftPlayerScore === maxScore || rightPlayerScore === maxScore) {
    var winner = leftPlayerScore === maxScore ? "User" : "AI";
    playerWin(winner);
  }


}

function playerWin(player) {
    var message = "Congratulations! " + player + " wins!";
    $('#message').text(message);
    $('#message-modal').modal('show');
    gameRunning = false;
  }
  

function reset() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  ballSpeedX = -ballSpeedX;
  ballSpeedY = Math.random() * 10 - 5;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#FFF";
  ctx.font = "15px Arial";

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.strokeStyle = "#FFF";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
  ctx.fill();
  ctx.closePath();

  ctx.fillRect(0, leftPaddleY, paddleWidth, paddleHeight);

  ctx.fillRect(canvas.width - paddleWidth, rightPaddleY, paddleWidth, paddleHeight);

  ctx.fillText("Score: " + leftPlayerScore, 10, 20);
  ctx.fillText("Score: " + rightPlayerScore, canvas.width - 70, 20);
}

function loop() {
  update();
  draw();
  animationId = requestAnimationFrame(loop);
}

$('#message-modal-close').on('click', function() {
  document.location.reload();
});