
let sleep = function (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

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
globoimage.src = 'globohappy.png';
globoimage.onload = function(){
    context.drawImage(globoimage, 15, 600, 100, 100);
};

let jump = async function (oContext) {

    redrawBackground(oContext);
    oContext.drawImage(globoimage, 15, 450, 100, 100);
 
    let iHeight = 600;
    let iFrame = 0;
    while (iFrame < 6) {

        iHeight = 600 - Math.abs(Math.sin(iFrame / 2) * 150);
        redrawBackground(oContext);
        oContext.drawImage(globoimage, 15, iHeight, 100, 100);
        
        await sleep(100);
        iFrame = iFrame + 1;
        
    }

    iHeight = 600;
    redrawBackground(oContext);
    oContext.drawImage(globoimage, 15, iHeight, 100, 100);

};

document.addEventListener('mouseup', async () => {

    jump(context);

})