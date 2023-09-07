var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var sadImg = new Image();
var happyImg = new Image();
var originalWidth, originalHeight;
sadImg.src = "../imgs/sad.png";
happyImg.src = "../imgs/happy.png";
sadImg.onload = function () {
    originalWidth = sadImg.width;
    originalHeight = sadImg.height;
    ctx.drawImage(sadImg, 30, 30)
}
canvas.addEventListener("mousedown", function () {
    ctx.drawImage(happyImg, 30, 30, originalWidth, originalHeight);
});

canvas.addEventListener("mouseup", function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(sadImg, 30, 30, originalWidth, originalHeight);
});
