let boardHeight = window.innerHeight;
let boardWidth = window.innerWidth;

let globoWidth = 100;
let globoHeight = 100;

let starWidth = 60;
let starHeight = 60;

let sleep = function (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

let canvas= document.createElement('canvas');
document.body.insertBefore(canvas, null);
canvas.width = boardWidth;
canvas.height = boardHeight;

let oContext = canvas.getContext( '2d' );

let redrawBackground = function (oContext) {

    oContext.fillStyle = 'blue';
    oContext.fillRect(0, 0, boardWidth, boardHeight);

};

redrawBackground(oContext);

let globoimages = ['globohappy.png', 'globomad.png', 'globosad.png']
let globoimage = new Image();
globoimage.src = globoimages[0];
globoimage.onload = function() {
    let globoTop = boardHeight - globoHeight;
    let globoLeft = 15;
    oContext.drawImage(globoimage, globoLeft, globoTop, globoWidth, globoHeight);
};

let starImage = new Image();
starImage.src = 'starglobonormal.png';
starImage.onload = function() {
    let starTop = boardHeight - starHeight;
    let starLeft = boardWidth - starWidth;
    
    for (starTop = boardHeight - starHeight; starTop > 0; starTop = starTop - (2 * starHeight)) {
        oContext.drawImage(starImage, starLeft, starTop, starWidth, starHeight);
    }
};

let starImageRed = new Image();
starImageRed.src = 'starglobored.png';
starImageRed.onload = function() {
    let starTop = boardHeight - starHeight - starHeight - starHeight;
    let starLeft = boardWidth - starWidth;

    for (starTop = boardHeight - (2 * starHeight); starTop > 0; starTop = starTop - (2 * starHeight)) {
        oContext.drawImage(starImageRed, starLeft, starTop, starWidth, starHeight);
    }
};

let jump = async function (oContext) {

    globoimage.src = globoimages[0];

    let globoTop = boardHeight - globoHeight;
    let iTop = globoTop;
    let iFrame = 0;
    while (iFrame < 12) {

        iTop = 600 - Math.abs(Math.sin(iFrame / 4) * 150);
        redrawBackground(oContext);
        oContext.drawImage(globoimage, 15, iTop, globoWidth, globoHeight);
        
        await sleep(50);
        iFrame = iFrame + 1;
        
    }

    iTop = globoTop;
    redrawBackground(oContext);
    oContext.drawImage(globoimage, 15, iTop, globoWidth, globoHeight);

};

document.addEventListener('mouseup', async () => {

    jump(oContext);

})