let colorlist=['#f849cc','red','#f48720','yellow','#0cc656','#37a6eb','#940bda'];

let normalizeColor = function (color) {

    let normalizedColor = color;
    let temporaryElement = document.createElement('p');
    temporaryElement.style = 'color:' + color;
    normalizedColor = temporaryElement.style.color;

    return normalizedColor;

};

let normalizeColors = function (colorlist) {

    let normalizedColorlist = [];
    colorlist.forEach(color => normalizedColorlist.push(normalizeColor(color)));

    return normalizedColorlist;

};

let normalizedColorlist = normalizeColors(colorlist);

let getColorOfParagraph = function (paragraph) {

    let style = paragraph.style;
    let color = style.color;

    return color;

};

let getNextColor = function (color, colorlist) {

    let positionOfColorInList = colorlist.indexOf(color);
    let positionOfNextColor = positionOfColorInList - 1 < 0 ? colorlist.length - 1 : positionOfColorInList - 1;
    let nextColor = colorlist[positionOfNextColor];

    return nextColor;

};

let changeColors=function(event) {
    let x = 0;
    while (x <= 900){

        let paragraphId = 'p' + x;
        let paragraphe = document.getElementById(paragraphId);
        let color = getColorOfParagraph(paragraphe);
        let nextColor = getNextColor(color, normalizedColorlist);
        paragraphe.style='color:' + nextColor;

        x = x + 1;
    };

};

let x = 0;
while (x <= 900) {
    console.log(x + ' hello,loly');

    let paragraphe= document.createElement('p');

    paragraphe.innerHTML ='hello,loly';
    paragraphe.style='color:' + normalizedColorlist[x%7];
    paragraphe.onclick = changeColors;
    paragraphe.id = 'p' + x;

    document.body.insertBefore(paragraphe,null);
    x = x + 1;
};
