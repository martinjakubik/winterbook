// sleeps for the given number of milliseconds
let sleep = function (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

// creates a canvas on the page
let canvas= document.createElement('canvas');
document.body.insertBefore(canvas,null);
canvas.width = 800;
canvas.height = 700;

// gets the brush from the canvas
let brush = canvas.getContext( '2d' );

// makes a gradient brush
let gradient=brush.createLinearGradient(10, 10, 1000,500);
gradient.addColorStop(0, 'purple');
gradient.addColorStop(1, 'blue');

brush.fillStyle = gradient;
brush.fillRect(10,10,1000,1000);

// draws an image of Globo
let globoimage = new Image();
globoimage.src='/Users/martin/code/gitwork/winterbook/learnjs/ex/globohappy.png';
globoimage.onload=function(){
    brush.drawImage(globoimage,15,600,100,100);
}

// draws a star image
let starimage = new Image();
starimage.src='starglobonormal.png';
starimage.onload=function(){
    brush.drawImage(starimage,740,640,60,60);
}

// clears the entire canvas by redrawing the background image on it 
let clearCanvas = function (canvas) {

    let brush = canvas.getContext( '2d' );

    brush.fillStyle = gradient;
    brush.fillRect(0, 0, canvas.width, canvas.height);

};

// makes Globo jump
let drawJump = async function (canvas) { 

    let brush = canvas.getContext( '2d' );

    let iTop = 600;
    let iFrame = 0;
    while (iFrame < 12) {

        iTop = 600 - Math.abs(Math.sin(iFrame / 4) * 150);
        clearCanvas(canvas);
        brush.drawImage(globoimage, 15, iTop, 100, 100);
        
        await sleep(50);
        iFrame = iFrame + 1;
        
    }

    iTop = 600;
    clearCanvas(canvas);
    brush.drawImage(globoimage, 15, iTop, 100, 100);

};

document.addEventListener('mouseup',async()=>{

    drawJump(canvas)

})

