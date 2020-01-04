
let canvas= document.createElement('canvas');
document.body.insertBefore(canvas, null);
canvas.width = 800;
canvas.height = 700;

let context = canvas.getContext( '2d' );

let redrawBackground = function (oContext) {

    let gradient = oContext.createLinearGradient(10, 10, 1000, 500);
    gradient.addColorStop(0, 'purple');
    gradient.addColorStop(1, 'blue');
    
    oContext.fillStyle = gradient;
    oContext.fillRect(10, 10, 1000, 1000);

};

redrawBackground(context);

let globoimage = new Image();
globoimage.src='/Users/martin/code/gitwork/winterbook/learnjs/solution/globohappy.png';
globoimage.onload=function(){
    context.drawImage(globoimage, 15, 600, 100, 100);
}

let sleep = function (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

document.addEventListener('mouseup', async () => {

    redrawBackground(context);
    context.drawImage(globoimage, 15, 450, 100, 100);
 
    await sleep(100);

    redrawBackground(context);
    context.drawImage(globoimage, 15, 600, 100, 100);
 
})