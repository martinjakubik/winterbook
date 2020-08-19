const CANVAS_HEIGHT = 600;
const VERTICAL_MARGIN = 36;

const YEARS_AT_SCHOOL = 1;
const DAYS_IN_SCHOOL_YEAR = 30;

const DRAW_POSITION_MULTIPLIER_IN_PIXELS = 20;
const PAUSE_BETWEEN_DAYS_IN_MILLISECONDS = 120;


//
// Exercise 1.2 - you should find the right place to add a loop inside this function
//
// This function runs a school year, giving points each day to each house.
const runSchoolYear = async function (oGraphicCanvas) {

    const ravenclawHouse = {
        position: 0,
        color1: '#0aa',
        color2: '#0aa',
        points: 0
    };
    const slytherinHouse = {
        position: 1,
        color1: '#0a0',
        color2: '#0a0',
        points: 0
    };
    const hufflepuffHouse = {
        position: 2,
        color1: '#00a',
        color2: '#00a',
        points: 0
    };
    const gryffindorHouse = {
        position: 3,
        color1: '#a00',
        color2: '#aa0',
        points: 0
    };

    let randomPoints = 0;
    let year = 1;
    let todaysScore = '';
    let winnerBanner = '';

    let day = 1;

    randomPoints = Math.round(Math.random() * 5);
    ravenclawHouse.points = ravenclawHouse.points + randomPoints;

    randomPoints = Math.round(Math.random() * 5);
    slytherinHouse.points = slytherinHouse.points + randomPoints;

    randomPoints = Math.round(Math.random() * 5);
    hufflepuffHouse.points = hufflepuffHouse.points + randomPoints;

    randomPoints = Math.round(Math.random() * 5);
    gryffindorHouse.points = gryffindorHouse.points + randomPoints;

    todaysScore = `Year ${year} - Day ${day} - Ravenclaw: ${ravenclawHouse.points} - Slytherin: ${slytherinHouse.points} - Hufflepuff: ${hufflepuffHouse.points} - Gryffindor: ${gryffindorHouse.points}`;

    writeOnCanvas(oGraphicCanvas, 10, 20, `Year ${year} - Day ${day}`);
    drawScoreOnCanvas(oGraphicCanvas, ravenclawHouse);
    drawScoreOnCanvas(oGraphicCanvas, slytherinHouse);
    drawScoreOnCanvas(oGraphicCanvas, hufflepuffHouse);
    drawScoreOnCanvas(oGraphicCanvas, gryffindorHouse);

    console.log(todaysScore);

    let mostPoints = Math.max(ravenclawHouse.points, slytherinHouse.points, hufflepuffHouse.points, gryffindorHouse.points);

    if (mostPoints === ravenclawHouse.points) {
        winnerBanner = `Ravenclaw wins with ${ravenclawHouse.points} points!`;
    } else if (mostPoints === slytherinHouse.points) {
        winnerBanner = `Slytherin wins with ${slytherinHouse.points} points!`;
    } else if (mostPoints === hufflepuffHouse.points) {
        winnerBanner = `Hufflepuff wins with ${hufflepuffHouse.points} points!`;
    } else if (mostPoints === gryffindorHouse.points) {
        winnerBanner = `Gryffindor wins with ${gryffindorHouse.points} points!`;
    }

    console.log();
    console.log(winnerBanner);

    writeOnCanvas(oGraphicCanvas, 10, 66, winnerBanner);

};

// erases a rectangle from point x1, y1 to point x2, y2
const clearRectOnCanvas = function (oCanvas, x1, y1, x2, y2) {

    const oContext = oCanvas.getContext('2d');

    oContext.fillStyle = '#fff';
    oContext.fillRect(x1, y1, x2, y2);

};

// draws a bar showing a house's score
const drawScoreOnCanvas = function (oCanvas, team) {

    const x = 100 + team.position * DRAW_POSITION_MULTIPLIER_IN_PIXELS;
    const y = 500;
    const sColor = team.color1;
    const nPoints = team.points;
    drawOnCanvas(oCanvas, x, y, nPoints, sColor);

};

// draws a rectangle, given a number for the height of the rectangle, a point (x, y) where to start drawing it, and a color
const drawOnCanvas = function (oCanvas, x, y, iValue, sColor) {

    const oContext = oCanvas.getContext('2d');

    oContext.fillStyle = sColor;
    oContext.fillRect(x, y, 10, -iValue);

};

// writes some text at a point (x, y)
const writeOnCanvas = function (oCanvas, x, y, sText) {

    const oContext = oCanvas.getContext('2d');
    oContext.font = '12pt sans-serif';
    const sColor = '#2a8';

    clearRectOnCanvas(oCanvas, x, y, x + 100, y - 100);
    oContext.fillStyle = sColor;
    oContext.fillText(sText, x, y);

};

// creates a simple box with a margin inside which we can add other boxes
const createPage = function () {

    const oPage = document.createElement('div');
    oPage.id = 'page';
    document.body.appendChild(oPage);

    const nParentWidth = oPage.parentNode.clientWidth;

    oPage.style.width = nParentWidth;
    oPage.style.height = CANVAS_HEIGHT;

    const nMarginSide = Math.floor(( nParentWidth - oPage.width ) / 2 );
    const sMarginSide = nMarginSide + "px";
    const sMarginVertical = VERTICAL_MARGIN + "px";

    oPage.style.marginLeft = sMarginSide;
    oPage.style.marginRight = sMarginSide;
    oPage.style.marginTop = sMarginVertical;
    oPage.style.marginBottom = sMarginVertical;

    return oPage;

};

// creates a button with an ID and a label
const createButton = function (sId, sLabel) {

    const oButton = document.createElement('button');
    oButton.id = sId;
    oButton.innerText = sLabel;

    document.body.appendChild(oButton);

    return oButton;

};

// creates a canvas with an ID on the given page; The z-index can be used to put one canvas above another one.
const createCanvas = function (sCanvasId, nZindex, oPage) {

    const oCanvas = document.createElement('canvas');
    oCanvas.id = sCanvasId;
    oPage.appendChild(oCanvas);

    const nParentWidth = oCanvas.parentNode.clientWidth;

    oCanvas.width = nParentWidth;
    oCanvas.height = CANVAS_HEIGHT;

    oCanvas.style.position = 'absolute';
    oCanvas.style.zindex = nZindex;

    return oCanvas;

};

// creates a canvas to draw on
const createGraphicCanvas = function (oPage) {

    const nZindex = 0;
    const oCanvas = createCanvas('graphicCanvas', nZindex, oPage);
    return oCanvas;

};

// creates a page, a canvas in the page, and a button to run the game again
const oPage = createPage();
const oGraphicCanvas = createGraphicCanvas(oPage);
const oRunAgainButton = createButton('runAgain', 'Run Again');

// desides what happens when the run again button is clicked
oRunAgainButton.onclick = () => {

    clearRectOnCanvas(oGraphicCanvas, 0, 0, oGraphicCanvas.width, oGraphicCanvas.height);
    runSchoolYear(oGraphicCanvas);

};

// starts the game when the page is loaded
runSchoolYear(oGraphicCanvas);