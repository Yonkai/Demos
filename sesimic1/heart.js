
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.width = window.innerWidth;
c.height = window.innerHeight;
var x = 1;
var toggle = true;
function animationLoop(){
 
	ctx.beginPath();
 ctx.strokeStyle="#0000FF";
 ctx.arc((Math.floor(Math.random() * 126) + 1)+c.width/2, (Math.floor(Math.random() * 126) + 1) +c.height/2, x*1, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.beginPath();
 ctx.strokeStyle="#FF0000";
 ctx.arc((Math.floor(Math.random() * 126) + 1)+c.width/2, (Math.floor(Math.random() * 126) + 1) +c.height/2, x*1.5, 0, 2 * Math.PI);
 ctx.stroke();
 ctx.beginPath();
 ctx.strokeStyle="#00FF00";
 ctx.arc((Math.floor(Math.random() * 126) + 1) + c.width/2, (Math.floor(Math.random() * 126) + 1)+c.height/2 , x*2, 0, 2 * Math.PI);
 ctx.stroke();
 x%10 === 0 ? ctx.clearRect(0, 0, c.width, c.height) : toggle = toggle;

    toggle === true ? x+=1:x-=1;
    if(x===80 || x===0){
        toggle === true ? x=80: x = 0;
        toggle = !toggle;
       ctx.clearRect(0, 0, c.width, c.height);
    }
}

var interval = setInterval(animationLoop,10);

