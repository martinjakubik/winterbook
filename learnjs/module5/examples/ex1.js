let calculateScore = function (person, listOfPoints) {

    let index = 0
    let total = 0;
    for (index = 0; index < listOfPoints.length; index = index + 1) {
        point = listOfPoints[index];
        total = total + point;
    }

    let average = 0;
    if (listOfPoints.length > 0) {
        average =  total / listOfPoints.length;
    }

    console.log(`${person}'s score`);
    console.log(`average point: ${average}`);
    console.log(`total score: ${total}`);
    console.log('');
    return average;
};

let markPoints = [ 9, 8, 9, 9, 10, 10, 6, 10, 9, 7, 6, 9, 10, 6 ];
let theresaPoints = [ 10, 10, 9, 10, 9, 10, 8, 9, 10, 10, 8, 1, 8, 8 ];
let jadePoints = [ 10, 9, 7, 8, 7, 10, 5, 8, 7, 6, 8, 7, 10, 7 ];

calculateScore('Mark', markPoints);
calculateScore('Theresa', theresaPoints);
calculateScore('Jade', jadePoints);