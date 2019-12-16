let colorlist=['#f849cc','red','#f48720','yellow','#0cc656','#37a6eb','#940bda'];

let sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
  
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

let flip = function (paragraphe) {
    
    let paragraphClassList = paragraphe.classList;
    if (paragraphClassList.contains('back')) {
        paragraphClassList.add('front');
        paragraphClassList.remove('back');
    } else {
        paragraphClassList.add('back');
        paragraphClassList.remove('front');
    }

}    

let changeColors = async function(event) {
    let x = 0;
    while (x <= 900){

        let paragraphId = 'p' + x;
        let paragraphe = document.getElementById(paragraphId);
        let color = getColorOfParagraph(paragraphe);
        let nextColor = getNextColor(color, normalizedColorlist);
        paragraphe.style='color:' + nextColor;

        if (x < 15) {
            await sleep(60);
        }

        flip(paragraphe);

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
