var animation_delay = 40;
var my_timeout = null;

function setupScreen(canvas_id)
{
  var canvas = document.getElementById(canvas_id);
  var actual_width = canvas.offsetWidth;
  var actual_height = canvas.offsetHeight;
  canvas.width = actual_width;
  canvas.height = actual_height;
}

x=0;
function drawScreen(canvas_id)
{
  x++;
  var canvas = document.getElementById(canvas_id);
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.strokeStyle = 'red';
  ctx.arc(canvas.width / 2, canvas.height / 2, x + 10, 0, 2 * Math.PI);
  ctx.stroke();
}

function animate()
{
  drawScreen('main-canvas');
  my_timeout = setTimeout(animate, animation_delay);
}

function onLoad()
{
  setupScreen('main-canvas');
  drawScreen('main-canvas');
  my_timeout = setTimeout(animate, animation_delay);
}

function onResize()
{
  setupScreen('main-canvas');
  drawScreen('main-canvas');
}

window.onload = onLoad;
window.onresize = onResize;