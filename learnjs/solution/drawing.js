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

let globoimages = ['globohappy.png', 'globomad.png', 'globosad.png']
let globoimage = new Image();
globoimage.src = globoimages[0];
let starImage = new Image();
starImage.src = 'starglobonormal.png';

let drawGlobo = function () {
    let globoTop = boardHeight - globoHeight;
    let globoLeft = 15;
    oContext.drawImage(globoimage, globoLeft, globoTop, globoWidth, globoHeight);
}

let drawStar = function() {
    let starTop = boardHeight - 3 * starHeight;
    let starLeft = boardWidth - starWidth;
    
    oContext.drawImage(starImage, starLeft, starTop, starWidth, starHeight);
};

let redrawBackground = function (oContext, x, y, width, height) {

    const x1 = x ? x : 0;
    const y1 = y ? y : 0;
    const width1 = width ? width : boardWidth;
    const height1 = height ? height : boardHeight;

    oContext.fillStyle = 'blue';
    oContext.fillRect(x1, y1, width1, height1);

};

let jump = async function (oContext) {

    globoimage.src = globoimages[0];

    let globoTop = boardHeight - globoHeight;
    let iTop = globoTop;
    let iFrame = 0;
    while (iFrame < 12) {

        // clears globo
        redrawBackground(oContext, 15, iTop, globoWidth, globoHeight);

        // draws new globo
        iTop = globoTop - Math.abs(Math.sin(iFrame / 4) * 150);
        oContext.drawImage(globoimage, 15, iTop, globoWidth, globoHeight);
        
        await sleep(50);
        iFrame = iFrame + 1;
        
    }

    redrawBackground(oContext, 15, iTop, globoWidth, globoHeight);
    oContext.drawImage(globoimage, 15, globoTop, globoWidth, globoHeight);

};

let moveStar = function (oContext, from, to) {

    if (from) {
        redrawBackground(oContext, from.x, from.y, starWidth, starHeight);
    }
    oContext.drawImage(starImage, to.x, to.y, starWidth, starHeight);

};

document.addEventListener('mouseup', async () => {

    jump(oContext);

})

let startGame = async function () {

    await sleep(2000);

    redrawBackground(oContext);
    drawGlobo();
    drawStar();

    let starLoop = 0;
    let from = null;
    let to = null;
    let starTop = 0;
    let starLeft = 0;

    while (starLoop < boardWidth) {

        starLoop = starLoop + 1;

        starTop = boardHeight - 3 * starHeight;
        starLeft = boardWidth - starWidth - starLoop;

        from = to ? to : null;
        to = {
            x: starLeft,
            y: starTop
        };

        moveStar(oContext, from, to);
        await sleep(10);

    }

}

startGame();
