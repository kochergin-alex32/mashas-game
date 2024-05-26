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
    ctx.font = "60px Arial"
    ctx.fillStyle = "white"
    if (val < 10) {
        ctx.fillText(val, x + 35, y +70)       
    }else{
        ctx.fillText(val, x + 15, y +70)       
    }
 
}


// drawSquare(200, 200, 4)
var drawTag = function(pos, val) {
    switch(pos) {
        // case 0:
        //     drawSquare(0, 0, val)
        //     break  
        // case 1:
        //     drawSquare(100, 0, val)
        //     break  
            case 0:
                drawSquare(0, 0, val)
                break  
            case 1:
                drawSquare(100, 0, val)
                break  
            case 2:
                drawSquare(200, 0, val)
                break  
            case 3:
                drawSquare(300, 0, val)
                break  
            case 4:
                drawSquare(0, 100, val)
                break  
            case 5:
                drawSquare(100, 100, val)
                break  

            case 6:
                drawSquare(200,  100, val)
                break  
            case 7:
                drawSquare(300, 100, val)
                break  
            case 8:
                drawSquare(0, 200, val)
                break  
            case 9:
                drawSquare(100, 200, val)
                break  
            case 10:
                drawSquare(200, 200, val)
                break  
            case 11:
                drawSquare(300, 200, val)
                break  
            case 12:
                drawSquare(0, 300, val)
                break  
            case 13:
                drawSquare(100, 300, val)
                break  
            case 14:
                drawSquare(200, 300, val)
                break  
            case 15:
                drawSquare(300, 300, val)
                break  
            
    }

}
for (let i = 0; i <=15; i++) {
    drawTag(i, arr15[i]);
    
}
//drawTag(15, 7)