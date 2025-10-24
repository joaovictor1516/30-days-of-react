const emptyArray = [];
const numbersArray = [1,2,3,4,5,6,7,8];

console.log(`length of numbersArray: ${numbersArray.length}`);

console.log(`first element of numbersArray: ${numbersArray[0]}`);

const mixedDataTypes = [true, 1, "hi", {1: "object"}, [2], null];

const itCompanies = ["Facebook", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

console.log(itCompanies);

console.log(`Number of ompanies: ${itCompanies.length}`);

console.log(`First element: ${itCompanies[0]}, the middle element: ${itCompanies[Math.ceil(itCompanies.length/2)]} and the last element: ${itCompanies.length - 1}`);

itCompanies.forEach(element => console.log(element));

console.log("==========================================");
itCompanies.forEach((element) => {
    const elementUpperCase = element.toUpperCase();
    console.log(elementUpperCase);
});
console.log("==========================================");

console.log(itCompanies + " are big IT companies.");

const companie = "Apple";
const filterCompanie = itCompanies.filter(element => element.toLowerCase === companie.toLowerCase);
filterCompanie.length === 1 ? console.log(companie) : console.log(`The ${companie} is not found`);

const elements = [];
for(let i of itCompanies){
    if(i.includes("oo")){
        console.log(`The companie ${i}, have more 2 or more consectives "o"`);
    }
}

const itCompaniesSort = itCompanies.sort();
console.log(itCompaniesSort);