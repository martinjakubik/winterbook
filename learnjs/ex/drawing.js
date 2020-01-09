// sleeps for the given number of milliseconds
let sleep = function (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// creates a canvas on the page
let canvas = document.createElement('canvas');
document.body.insertBefore(canvas, null);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let brush = canvas.getContext( '2d' );

// clears the entire canvas by redrawing the background image on it 
let clearCanvas = function (canvas) {

    brush.fillStyle = 'blue';
    brush.fillRect(0, 0, canvas.width, canvas.height);
    
};

clearCanvas(canvas);

// draws an image of Globo
let globoimage = new Image();
globoimage.src='globohappy.png';
globoimage.onload=function(){
    brush.drawImage(globoimage, 15, window.innerHeight-100, 100, 100);
}

// draws a star image
let starimage = new Image();
starimage.src='starglobonormal.png';
starimage.onload=function(){
    brush.drawImage(starimage,740,640,60,60);
}

// reacts when you tap
document.addEventListener('mouseup', async () => {

    drawJump(canvas)

})

// makes Globo jump
let drawJump = async function (canvas) { 

    let brush = canvas.getContext( '2d' );

    let iTop = (window.innerHeight - 100);
    let counter = 0;
    while (counter < 12) {

        iTop = (window.innerHeight - 100) - Math.abs(Math.sin(counter / 4) * 150);
        clearCanvas(canvas);
        brush.drawImage(globoimage, 15, iTop, 100, 100);
        
        await sleep(50);
        counter = counter + 1;
        
    }

    iTop = (window.innerHeight - 100);
    clearCanvas(canvas);
    brush.drawImage(globoimage, 15, iTop, 100, 100);

};

while(counter){}