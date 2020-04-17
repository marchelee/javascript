var ms = 0, s = 0, m = 0
var timer

var stopwatchElement = document.querySelector('.stopwatch')
var lapsContainer = document.querySelector('.laps')

function startTimer() {
  if (!timer) {
    timer = setInterval(run, 10)
  }
}

function run() {
  stopwatchElement.textContent = getTime()
  ms++
  if (ms == 100) {
    ms = 0
    s++
  }
  if (s == 60) {
    s = 0
    m++
  }
}

function pauseTimer() {
  stopTime()
}

function stopTimer() {
  stopTime()
  ms = 0
  s = 0
  m = 0
  stopwatchElement.textContent = getTime()
}

function restartTimer() {
  stopTimer()
  startTimer()
  clearLapTimer()
}

function startLapTimer() {
  if (timer) {
    var li = document.createElement('li')
    li.innerText = getTime();
    lapsContainer.appendChild(li)
  }
}

function clearLapTimer() {
  lapsContainer.innerHTML = ''
}


function startTime() {
  var today = new Date()
  var hour = today.getHours()
  var minute = today.getMinutes()
  var second = today.getSeconds()

  minute = checkTime(minute)
  second = checkTime(second)

  document.getElementById('clock-text').innerHTML =
    hour + ":" + minute + ":" + second;
  var timeout = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i;
}

function stopTime() {
  clearInterval(timer)
  timer = false
}

function getTime() {
  return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms)
}