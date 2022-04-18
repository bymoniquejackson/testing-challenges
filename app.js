//in class//
// const add = (num1, num2) => {
//     return num1 + num2
// }

// let myArray = ["Momo", "Lala", "Popo"]

// module.exports = {
//     add,
//     myArray
// }
//_____________________________________________________________________________________________________________________//


//______Challenge One: To make sure what is returned is not ‘null’___________________________________________________//
const notNull = () => "test";


//______Challenge Two: A value that is truthy ___________________________________________________//

const truthy = (i) => {
    return i
}



//______Challenge Three: A value that NOT falsey ___________________________________________________//
const notFalsy = () => true;


//______Challenge Four:Create a function that creates an object with 2 properties, test to make sure that the objects properties are equal to your test function__________________________________________//


const twoObjects = (name) => {
    const objects = {
        wine: "Pinot Grigio",
        vintage: 1964
    }

    return objects;
}

//______Challenge Five: A function that will return items in an array with 6 or more_________________________________//


const arraySixItems = () => [ 5, 10, 15, 20, 25, 30]



//______Challenge Six: Can you refractor any of your code?____________//

//??//



//______Challenge Seven: Convert a number to a string____________//


const numToString = (num) => num.toString();


//______Challenge Eight:  Display the correct planet with the number order it is away from the sun__________//

const planets = (num) => {
    let planetArray  = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
    return planetArray[num - 1]
}


module.exports = {
    notNull,
    truthy,
    notFalsy,
    twoObjects,
    arraySixItems,
    numToString,
    planets,
}