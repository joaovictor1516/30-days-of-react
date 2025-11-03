const countries = require("./countries").countries;
const web_techs = require("./web_techs").web_techs;
console.log(countries);
console.log(web_techs);

const text =  'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

const arrayText = text.replaceAll(/[.,!?;:]/g, "").split(" ");

console.log(arrayText);

const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart);
shoppingCart.unshift("Meat");
console.log(shoppingCart);
shoppingCart.pop();
console.log(shoppingCart);
shoppingCart[3] = "Green Tea";
console.log(shoppingCart);

if(countries.indexOf("Ethiopia") !== -1){
    console.log("ETHIOPIA");
} else{
    countries.push("Ethiopia");
}

if(web_techs.indexOf("Sass") !== -1){
    console.log("Sass is a CSS preprocess.");
} else{
    web_techs.push("Sass");
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];
const fullStack = frontEnd.concat(backEnd);
console.log(frontEnd, backEnd, fullStack);