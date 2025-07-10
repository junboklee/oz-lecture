const maxStars = 10;
let input;
var stars;

while (tru) {
    input = Number(prompt('Enter the number of stars (1-10):'));

    if (isNaN(input) || input < 1 || input > maxStars) {
        console.log('Invalid input! Enter a number between 1 and 10.');
        continue;
    }
    break;
}

function printStars(count = 1) {
    stars ='';
    for (let i = 0; i < count; i++) {
        stars += '*';
    }
    console.log(stars);
}

printStars(input);