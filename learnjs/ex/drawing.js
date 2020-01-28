let boardHeight = window.innerHeight;
let boardWidth = window.innerWidth;

let globoWidth = 100;
let globoHeight = 100;

let starWidth = 60;
let starHeight = 60;

// does nothing for the given number of milliseconds
let sleep = function (milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

let canvas= document.createElement('canvas');
document.body.insertBefore(canvas, null);
canvas.width = boardWidth;
canvas.height = boardHeight;

let brush = canvas.getContext( '2d' );

let globoimages = ['globohappy.png', 'globomad.png', 'globosad.png']
let globoimage = new Image();
globoimage.src = globoimages[0];
let starImage = new Image();
starImage.src = 'starglobonormal.png';

// draws an image of Globo
let drawGlobo = function () {
    let globoTop = boardHeight - globoHeight;
    let globoLeft = 15;
    brush.drawImage(globoimage, globoLeft, globoTop, globoWidth, globoHeight);
}

// draws a star image
let drawStar = function() {
    let starTop = boardHeight - 3 * starHeight;
    let starLeft = boardWidth - starWidth;
    
    brush.drawImage(starImage, starLeft, starTop, starWidth, starHeight);
};

// clears a piece of the canvas by redrawing the background image on it
let clearCanvas = function (brush, x, y, width, height) {

    const x1 = x ? x : 0;
    const y1 = y ? y : 0;
    const width1 = width ? width : boardWidth;
    const height1 = height ? height : boardHeight;

    brush.fillStyle = 'blue';
    brush.fillRect(x1, y1, width1, height1);

};

// makes Globo jump
let jump = async function (brush) {

    globoimage.src = globoimages[0];

    let globoTop = boardHeight - globoHeight;
    let iTop = globoTop;
    let iFrame = 0;
    while (iFrame < 12) {

        // clears globo
        clearCanvas(brush, 15, iTop, globoWidth, globoHeight);

        // draws new globo
        iTop = globoTop - Math.abs(Math.sin(iFrame / 4) * 150);
        brush.drawImage(globoimage, 15, iTop, globoWidth, globoHeight);
        
        await sleep(50);
        iFrame = iFrame + 1;
        
    }

    clearCanvas(brush, 15, iTop, globoWidth, globoHeight);
    brush.drawImage(globoimage, 15, globoTop, globoWidth, globoHeight);

};

// reacts when you tap
document.addEventListener('mouseup', async () => {

    jump(brush);

})

let moveStar = function (brush, starLoop) {

    let starTop = boardHeight - 3 * starHeight;
    let starLeft = boardWidth - starWidth - (starLoop - 1);

    let from = {
        x: starLeft,
        y: starTop
    };

    starLeft = boardWidth - starWidth - starLoop;

    let to = {
        x: starLeft,
        y: starTop
    };

    clearCanvas(brush, from.x, from.y, starWidth, starHeight);
    brush.drawImage(starImage, to.x, to.y, starWidth, starHeight);

};

let startGame = async function () {

    await sleep(1000);

    clearCanvas(brush);
    drawGlobo();
    drawStar();

    let starLoop = 0;

    while (starLoop < boardWidth) {

        // your code here
        // makes the star move





        // slows down the loop a bit
        await sleep(10);

    }

}

startGame();
