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

var checkPlace = function (evX) {
    if (evX < 110) {
        return 1
    }
    if (evX < 210) {
        return 2
    }
    if (evX < 310) {
        return 3
    }
    if (evX < 410) {
        return 4
    }
}
//drawTag(15, 7)
canvas.addEventListener("click", function(e){
    if (e.clientY < 110) {
        // console.log("ряд 1");
        var place = checkPlace(e.clientX)

        switch (place) {
            case 1:
                var clickPos = 0
                break;
            case 2:
                var clickPos = 1
                break;
            case 3:
                var clickPos = 2
                break;
            case 4:
                var clickPos = 3
                break;
        
                
        }

    }  if (e.clientY > 110 && e.clientY < 210) {
        console.log("ряд 2")
        var place = checkPlace(e.clientX)
    }  if (e.clientY > 210 && e.clientY < 310) {
        console.log("ряд 3");
        var place = checkPlace(e.clientX)
    }  if (e.clientY > 310 && e.clientY < 410) {
        console.log("ряд 4");
        var place = checkPlace(e.clientX)
    }
})
