let date = new Date();

let seconds = date.getSeconds() * 6;
let minutes = date.getMinutes() * 6;
let hours = date.getHours() * 30;

drawClock(seconds, "seconds");
drawClock(minutes, "minutes");
drawClock(hours, "hours");

setInterval(function () {
  seconds += 6;
  if (seconds >= 360) {
    seconds = 0;
    minutes += 6;
    drawClock(minutes, "minutes");
    if (minutes >= 360) {
      minutes = 0;
      hours += 15;
      drawClock(hours, "hours");
    }
  }
  drawClock(seconds, "seconds");
}, 1000);

function drawClock(i, id) {
  let element = document.getElementById(id);
  element.style = `background-image: conic-gradient(from ${i}deg, #fff, #000)`;
}
