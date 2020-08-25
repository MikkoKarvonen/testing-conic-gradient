let i = 0;

drawClock(i);

setInterval(function () {
  i += 6;
  drawClock(i);
}, 1000);

function drawClock(i) {
  var style = document.getElementById("style");
  style.innerHTML = `
 #clock{
  background-image:
     conic-gradient(from ${i}deg, #fff, #000);
}`;
  document.head.appendChild(style);
}
