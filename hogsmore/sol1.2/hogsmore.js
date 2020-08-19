const CANVAS_HEIGHT = 600;
const VERTICAL_MARGIN = 36;

const YEARS_AT_SCHOOL = 1;
const DAYS_IN_SCHOOL_YEAR = 30;

const DRAW_POSITION_MULTIPLIER_IN_PIXELS = 20;
const PAUSE_BETWEEN_DAYS_IN_MILLISECONDS = 120;

const runSchoolYear = async function (oGraphicCanvas) {

    const ravenclawTeam = {
        position: 0,
        color1: '#0aa',
        color2: '#123',
        points: 0
    };
    const slytherinTeam = {
        position: 1,
        color1: '#0a0',
        color2: '#123',
        points: 0
    };
    const hufflepuffTeam = {
        position: 2,
        color1: '#00a',
        color2: '#123',
        points: 0
    };
    const gryffindorTeam = {
        position: 3,
        color1: '#a00',
        color2: '#123',
        points: 0
    };

    let randomPoints = 0;
    let year = 1;
    let todaysScore = '';
    let winnerBanner = '';

    while (year <= YEARS_AT_SCHOOL) {

        let day = 1;
        while (day <= DAYS_IN_SCHOOL_YEAR) {

            randomPoints = Math.round(Math.random() * 5);
            ravenclawTeam.points = ravenclawTeam.points + randomPoints;

            randomPoints = Math.round(Math.random() * 5);
            slytherinTeam.points = slytherinTeam.points + randomPoints;

            randomPoints = Math.round(Math.random() * 5);
            hufflepuffTeam.points = hufflepuffTeam.points + randomPoints;

            randomPoints = Math.round(Math.random() * 5);
            gryffindorTeam.points = gryffindorTeam.points + randomPoints;

            todaysScore = `Year ${year} - Day ${day} - Ravenclaw: ${ravenclawTeam.points} - Slytherin: ${slytherinTeam.points} - Hufflepuff: ${hufflepuffTeam.points} - Gryffindor: ${gryffindorTeam.points}`;

            writeOnCanvas(oGraphicCanvas, 10, 20, `Year ${year} - Day ${day}`);
            drawScoreOnCanvas(oGraphicCanvas, ravenclawTeam);
            drawScoreOnCanvas(oGraphicCanvas, slytherinTeam);
            drawScoreOnCanvas(oGraphicCanvas, hufflepuffTeam);
            drawScoreOnCanvas(oGraphicCanvas, gryffindorTeam);

            console.log(todaysScore);

            day = day + 1;

            // pauses a bit
            await new Promise(fnResolve => setTimeout(fnResolve, PAUSE_BETWEEN_DAYS_IN_MILLISECONDS));

        };

        year = year + 1;
    };

    let mostPoints = Math.max(ravenclawTeam.points, slytherinTeam.points, hufflepuffTeam.points, gryffindorTeam.points);

    if (mostPoints === ravenclawTeam.points) {
        winnerBanner = `Ravenclaw wins with ${ravenclawTeam.points} points!`;
    } else if (mostPoints === slytherinTeam.points) {
        winnerBanner = `Slytherin wins with ${slytherinTeam.points} points!`;
    } else if (mostPoints === hufflepuffTeam.points) {
        winnerBanner = `Hufflepuff wins with ${hufflepuffTeam.points} points!`;
    } else if (mostPoints === gryffindorTeam.points) {
        winnerBanner = `Gryffindor wins with ${gryffindorTeam.points} points!`;
    }

    console.log();
    console.log(winnerBanner);

    writeOnCanvas(oGraphicCanvas, 10, 66, winnerBanner);

};

const clearRectOnCanvas = function (oCanvas, x1, y1, x2, y2) {

    const oContext = oCanvas.getContext('2d');

    oContext.fillStyle = '#fff';
    oContext.fillRect(x1, y1, x2, y2);

};

const drawScoreOnCanvas = function (oCanvas, team) {

    const x = 100 + team.position * DRAW_POSITION_MULTIPLIER_IN_PIXELS;
    const y = 500;
    const sColor = team.color1;
    const nPoints = team.points;
    drawOnCanvas(oCanvas, x, y, nPoints, sColor);

};

const drawOnCanvas = function (oCanvas, x, y, iValue, sColor) {

    const oContext = oCanvas.getContext('2d');

    oContext.fillStyle = sColor;
    oContext.fillRect(x, y, 10, -iValue);

};

const writeOnCanvas = function (oCanvas, x, y, sText) {

    const oContext = oCanvas.getContext('2d');
    oContext.font = '12pt sans-serif';
    const sColor = '#2a8';

    clearRectOnCanvas(oCanvas, x, y, x + 100, y - 100);
    oContext.fillStyle = sColor;
    oContext.fillText(sText, x, y);

};

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

const createButton = function (sId, sLabel) {

    const oButton = document.createElement('button');
    oButton.id = sId;
    oButton.innerText = sLabel;

    document.body.appendChild(oButton);

    return oButton;

};

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

const createGraphicCanvas = function (oPage) {

    const nZindex = 0;
    const oCanvas = createCanvas('graphicCanvas', nZindex, oPage);
    return oCanvas;

};

const oPage = createPage();
const oGraphicCanvas = createGraphicCanvas(oPage);
const oRunAgainButton = createButton('runAgain', 'Run Again');

oRunAgainButton.onclick = () => {

    clearRectOnCanvas(oGraphicCanvas, 0, 0, oGraphicCanvas.width, oGraphicCanvas.height);
    runSchoolYear(oGraphicCanvas);

};

runSchoolYear(oGraphicCanvas);