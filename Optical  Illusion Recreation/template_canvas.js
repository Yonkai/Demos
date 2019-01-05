var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;



function blackdots(){

let horizontalGapPixels = 80;
let verticalGapPixels = 80;
let crossHatchedPixels = 160;
let lineThicknessPixels = 12;
let lineColor = '#7F7F7F';

for(lineNo=1;lineNo<35;lineNo++){
ctx.lineWidth = lineThicknessPixels;  
ctx.strokeStyle = lineColor;

//Horizontal lines
ctx.beginPath();
ctx.moveTo(0, lineNo*horizontalGapPixels );    
ctx.lineTo(canvas.width, lineNo*horizontalGapPixels );  
ctx.stroke();

//Vertical lines
ctx.beginPath();
ctx.moveTo(lineNo*verticalGapPixels,0);    
ctx.lineTo(lineNo*horizontalGapPixels, canvas.height);  
ctx.stroke();


//cross-hatching
ctx.beginPath();
ctx.moveTo(((lineNo)*crossHatchedPixels),0);    
ctx.lineTo(0,((lineNo)*crossHatchedPixels));
ctx.stroke();

ctx.beginPath();
ctx.moveTo((lineNo)*crossHatchedPixels,canvas.height);    
ctx.lineTo(0,canvas.height - ((lineNo)*crossHatchedPixels));
ctx.stroke();

}
}

blackdots();