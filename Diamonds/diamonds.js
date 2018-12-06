const canvas = document.getElementById('c');
const context = canvas.getContext('2d');
const trianglesDown = 17;
const trianglesAcross = 13;
const shiftingSpeed = 0.01;
var shiftingValue = 5;
var wavePos = 0;
var flip = true; //used for laying out triangles in a grid. 
var ref;
resizeCanvas();

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function flowGrad() {
    context.globalCompositeOperation = "color-dodge";

    context.clearRect(0, 0, canvas.width, canvas.height);

    var lineargradient = context.createLinearGradient(canvas.width / trianglesAcross / 2, 0, canvas.width / trianglesAcross / 2, canvas.height / trianglesDown);
    lineargradient.addColorStop(0, 'rgba(255,0,0,1 )');
    lineargradient.addColorStop(wavePos, 'rgba(0,255,0,1)');
    lineargradient.addColorStop(1, 'rgba(0,0,255,1)');

    context.fillStyle = lineargradient;

    for (var i = 0; i < trianglesDown + 1; i++) {
        for (var j = 0; j < (trianglesAcross * 3); j++) {
            context.save();

            context.translate(j * canvas.width / trianglesAcross / 2, i * canvas.height / trianglesDown);
         
            if (!flip) {
                context.rotate(180 * Math.PI / 180);
            }
         
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(canvas.width / trianglesAcross, 0);
            context.lineTo(canvas.width / trianglesAcross / 2, canvas.height / trianglesDown);
         
            context.fill();
            context.restore();
            flip = !flip;
        }
    }

    shiftingValue += shiftingSpeed;
    wavePos = Math.abs(Math.sin(shiftingValue));
    ref = requestAnimationFrame(flowGrad);
}

function init() {
    // Register an event listener to call the resizeCanvas() function 
    // each time the window is resized.   

    window.addEventListener('resize', resizeCanvas, false);
 
    // cancel current frame, if any
    cancelAnimationFrame(ref);
    ref = requestAnimationFrame(flowGrad);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

init();

/*
For this versions instead try to do less math by just translating
a generated object with canvas.translate(); function. So make ONE
Triangle based on the given dimensions than loop through it. 
*/