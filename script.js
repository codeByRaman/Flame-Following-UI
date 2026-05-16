var box = document.getElementById("box");

let currentX = 0;
let currentY = 0;

let targetX = 0;
let targetY = 0;

document.addEventListener("mousemove",(e)=>{
    let boxWidth = box.offsetWidth;
    let boxHeight = box.offsetHeight;
    targetX = e.clientX-boxWidth/2;
    targetY = e.clientY-boxHeight/2;
});

function movebox(){
    currentX += (targetX - currentX) * 0.02;
    currentY += (targetY - currentY) * 0.02;

    box.style.left = currentX + "px";
    box.style.top = currentY + "px";

    requestAnimationFrame(movebox);
}
movebox();