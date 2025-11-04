const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const countries = require("./countries").countries;

const min = ages.sort()[0];
const max = ages.sort()[ages.length - 1];

console.log(min, max);

const firstTenCountries = countries.slice(0, 10);
console.log(firstTenCountries);

if(countries.length % 2 === 0){
    console.log(countries[countries.length / 2]);
} else{
    console.log(countries[Math.ceil(countries.length / 2)], countries[Math.ceil((countries.length / 2) + 1)]);
}

if(countries.length % 2 !== 0){
    countries.push("Brasil");
}

const firstHalf = countries.slice(0, (countries.length / 2) + 1);
const secondHalf = countries.slice((countries.length / 2) + 1);

console.log("First half: ", firstHalf);
console.log("Second half: ", secondHalf);