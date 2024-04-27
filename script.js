var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var arr15 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]; 
for (var i = 0; i < 10; i++){
arr15.sort(()=> Math.random() - 0.5);
}
// console.log(arr15);
var drawSquare = function (x, y, val) {
    ctx.fillStyle = "black"
    ctx.fillRect(x, y, 100, 100)

    if(val === 0){
        ctx.fillStyle = "white"
    }else{

        ctx.fillStyle = "teal"
    }
    ctx.fillRect(x + 5, y + 5, 90, 90)
}
drawSquare(200, 200, 4)
