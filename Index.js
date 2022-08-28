//1
let ages= [3, 9, 23, 64, 2, 8,28, 93];
console.log((ages[ages.length-1]) - ages[0]);//a
ages.push(21);//b
console.log((ages[ages.length-1]) - ages[0]);

let sumOfAges=0
for(let i =0; i < ages.length; i++){
    sumOfAges += ages[i];//for loop set up to calculate sum
}
let average= sumOfAges / ages.length;
console.log(average)


//2-6
let names=['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let listOfNames= names.map(n=> n + ' ');
console.log(listOfNames.join('\n'));
console.log(names[names.length -1]); // to access the last element of any array
console.log(names[0]); //to access the first element of any array

let namesLength=[];
names.forEach(name =>namesLength.push(name.length));
console.log(namesLength);

let sum=(0);
for(let i=0; i<namesLength.length; i++){
    sum+=namesLength[i];
}console.log(sum);



// //7
function greeting(name, n){
    let statement= '';
    while(n>0){
        statement += name;
        n--;
    }
    return statement
}console.log(greeting('Dakota', 3))




//8
function fullName(firstName, lastName){
    alert(firstName + ' ' + lastName) 
}fullName('Percy', 'Hinshaw')



//9)
function titanic (array){
    let sumOfArray= 0;
    for(let i =0; i < array.length; i++){
        sumOfArray += array[i];
    } return sumOfArray > 100;
}console.log(titanic(ages));






//10)
function titanic2 (smallerTitanic){
    let sumOfArray= 0;
    for(let i =0; i < smallerTitanic.length; i++){
        sumOfArray += smallerTitanic[i];
}return sumOfArray / smallerTitanic.length;
}console.log(titanic2(ages));



//11)
function biggerTitanic(array1, array2){//let biggerTitanic= Titanisaur. XD
    return titanic2(array1) > titanic2(array2);//this is using the function that calulates the average.
}console.log(biggerTitanic(ages, namesLength));// I just pulled from previous arrays.



//12)
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.5){
        return true;
    }return false
}console.log(willBuyDrink(false, 11));


//13) This is a function I accidentally made while working on a faux assignment. It works like it's supposed to. 
// It's supposed to help me figure out if I can buy a Star Wars Lego set.
function canIBuy(hoursWorked) {
    let starWarsLegos = 200;
    let paycheck = hoursWorked * 11;
    let moneyInWallet = 15 + paycheck;
    if (moneyInWallet >= starWarsLegos){
        console.log("I have $" + moneyInWallet + '! I can buy the Lego Set! Yaaaayyyy!!!');
        let newAmount = moneyInWallet - starWarsLegos;
        console.log('I now have $' + newAmount + ' in my wallet.');
        if (newAmount < 100) {
            console.log("I definitely shouldn't have bought that lego set. :(");
        }
         else {
            console.log("Maybe I shouldn't have bought that Lego set");
        }
    }
    else{
        console.log('I have $' + moneyInWallet + "... I can't get the lego set.");
    } 
} canIBuy(40);





//a bit of code I'm proud of.
//uncomment to test.
// let starWarsLegos= 200
// let hoursWorked = prompt ("How many hours did you work?")
// let paycheck= hoursWorked * 11
// let moneyInWallet= 15 + paycheck
// if (moneyInWallet >= starWarsLegos){
//     console.log("I have $" + moneyInWallet + '! I can buy the Lego Set! Yaaaayyyy!!!');
//     let newAmount= moneyInWallet - starWarsLegos;
//         console.log('I now have $' + newAmount + ' in my wallet.');
//     if (newAmount < 100){
//         console.log("I definitely shouldn't have bought that lego set. :(");
//     }else{
//         console.log("Maybe I shouldn't have bought that Lego set");
//     }
// }console.log('I have $' + moneyInWallet + "... I can't get the lego set.");