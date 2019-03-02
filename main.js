//George Smith
//Sam Smith
//John Doe
//Tori Amos
//Britney Spears


// const firstName = 'Emily';
// const lastName = 'DeWitt';
// console.log(firstName + ' ' + lastName);
// console.log(`${firstName} ${lastName}`);

const namePrinter = (firstName, lastName) => {
    console.log(`${firstName} ${lastName}`);
};

namePrinter('Emily', 'DeWitt');
namePrinter('John', 'Doe');
namePrinter('Sally', 'Smith');

const nuggetizer = (animal) => {
    return `processed ${animal}`;
};

console.log(nuggetizer('pig'));
console.log(nuggetizer('cow'));
console.log(nuggetizer('chicken'));
console.log(nuggetizer('student'));

const dogBreed = (breedName) => {
    return `My favorite dog breed is ${breedName}`;
};

dogBreed('border collie');

//const dogBreedDiv = document.getElementById('dog-breeds');
//console.log('dogBreedDiv', dogBreedDiv);
//dogBreedDiv.innerHTML = dogBreed('lab');

//const nuggetizerDiv = document.getElementById('nuggetizer');
//nuggetizerDiv.innerHTML = nuggetizer('bear');

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += textToPrint;
}

printToDom('dog-breeds', dogBreed('lab'));
printToDom('nuggetizer', nuggetizer('bear'));
printToDom('nuggetizer', nuggetizer('kitten'));
printToDom('nuggetizer', 'mmmmm');

let bandNumber = 1;

const addBand = (bandName) => {
    const bandText = `<h5>${bandNumber}. ${bandName}</h5>`;
    bandNumber = bandNumber + 1;
    printToDom('band-list', bandText);
}

addBand('Metallica'); //1. Metallica
addBand('Slayer'); //2. Slayer
