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