// Declare variables
const fps = 30
var ballSize = 20
var ballX, ballY
var ballXVelocity, ballYVelocity

// Load canvas
var canvas = document.querySelector(".canvas")
var context = canvas.getContext("2d")

// Update every 1/30 second
setInterval(update, 1000 / fps)

//Ball starting position
ballX = Math.floor(Math.random() * canvas.height, 100)
ballY = Math.floor(Math.random() * canvas.width, 100)

console.log(ballX)
console.log(ballY)

// Random Ball speed
ballXVelocity = Math.floor((Math.random() * 5) + 1 / fps) 
ballYVelocity = Math.floor((Math.random() * 5) + 1 / fps) 

// Update function
function update() {
  // Move the ball
  ballX += ballXVelocity
  ballY += ballYVelocity

  // Bounce when hit the wall
  if (ballX < 0) {
    ballXVelocity = -ballXVelocity
  }

  if (ballX > canvas.width) {
    ballXVelocity = -ballXVelocity
  }

  if (ballY < 0) {
    ballYVelocity = -ballYVelocity
  }

  if (ballY > canvas.height) {
    ballYVelocity = -ballYVelocity
  }

  // Draw background and ball
  context.fillStyle = "white"
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.fillStyle = "orange"
  context.beginPath()
  context.arc(ballX, ballY, ballSize / 2, 0, 2 * Math.PI)
  context.closePath()
  context.fill()
}