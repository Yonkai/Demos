var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;



function lines(){

let horizontalGapPixels = 40;
let verticalGapPixels = 40;
let crossHatchedPixels = 80;
let lineThicknessPixels = 6;
let lineColor = '#7F7F7F';


for(lineNo=1;lineNo<70;lineNo++){
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


//Cross-hatching lines
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

function dots(){
    for(lineNo=1;lineNo<100;lineNo++){
    let dotSpacing = 160;
    let dotColorBottom = '#000000';
    let dotColorTop = '#FFFFFA';
        for(lineNoVert=1;lineNoVert<70;lineNoVert++){
            //Draw black dots on bottom layer
            ctx.fillStyle = dotColorTop;
            ctx.beginPath();
            ctx.arc(dotSpacing*lineNo, dotSpacing*lineNoVert, 5, 0, 2 * Math.PI);
            ctx.fill();

            //Draw white dots on top layer
            ctx.fillStyle = dotColorBottom;
            ctx.beginPath();
            ctx.arc(dotSpacing*lineNo, dotSpacing*lineNoVert, 4, 0, 2 * Math.PI);
            ctx.fill();
        }
    }
}

lines();
dots();