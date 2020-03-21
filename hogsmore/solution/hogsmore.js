console.log('Welcome to Hogsmore');

let prompt = function (question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

prompt('Are you ready?', function (input) {
    console.log(input);
    process.exit();
});

const YEARS_AT_SCHOOL = 1;
const DAYS_IN_SCHOOL_YEAR = 15;

let ravenclawPoints = 0;
let slytherinPoints = 0;
let hufflepuffPoints = 0;
let gryffindorPoints = 0;

let randomPoints = 0;
let year = 1;
let todaysScore = '';
let winnerBanner = '';

while (year <= YEARS_AT_SCHOOL) {
    
    let day = 1;
    while (day <= DAYS_IN_SCHOOL_YEAR) {
        
        randomPoints = Math.round(Math.random() * 5);
        ravenclawPoints = ravenclawPoints + randomPoints;
        
        randomPoints = Math.round(Math.random() * 5);
        slytherinPoints = slytherinPoints + randomPoints;
        
        randomPoints = Math.round(Math.random() * 5);
        hufflepuffPoints = hufflepuffPoints + randomPoints;
        
        randomPoints = Math.round(Math.random() * 5);
        gryffindorPoints = gryffindorPoints + randomPoints;
        
        todaysScore = `Year ${year} - Day ${day} - Ravenclaw: ${ravenclawPoints} - Slytherin: ${slytherinPoints} - Hufflepuff: ${hufflepuffPoints} - Gryffindor: ${gryffindorPoints}`;
        
        console.log(todaysScore);
        
        day = day + 1;

    };

    year = year + 1;
};

let mostPoints = Math.max(ravenclawPoints, slytherinPoints, hufflepuffPoints, gryffindorPoints);

if (mostPoints === ravenclawPoints) {
    winnerBanner = `Ravenclaw wins with ${ravenclawPoints} points!`;
} else if (mostPoints === slytherinPoints) {
    winnerBanner = `Slytherin wins with ${slytherinPoints} points!`;
} else if (mostPoints === hufflepuffPoints) {
    winnerBanner = `Hufflepuff wins with ${hufflepuffPoints} points!`;
} else if (mostPoints === gryffindorPoints) {
    winnerBanner = `Gryffindor wins with ${gryffindorPoints} points!`;
}

console.log();
console.log(winnerBanner);