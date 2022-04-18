//in class//
const { test, expect } = require("@jest/globals");
const app = require('../app')

// describe("testing my add function", () => {
//     test("should equal 5 when pass 2 and 3", () => {
//         expect(funcs.add(2, 3)).toBe(5)
//     })
//     test("should not equal 9 when passed 2 and 3", () => {
//         expect(funcs.add(2, 3)).not.toBe(9)
//     })
// })


// test("see if it contains Momo", () => {
//     expect(funcs.myArray).toContain("Momo")
// })

//_____________________________________________________________________________________________________________________//


//______Challenge One: To make sure what is returned is not ‘null’___________________________________________________//
describe("challenge One: To make sure what is returned is not ‘null’", () => {
    test("return value not null", () => {
        expect(app.notNull("places")).not.toBeNull()
    })
})

//______Challenge Two: A value that is truthy ___________________________________________________//

describe("challenge Two: Return a truthy", () => {
    test("return value is truthy", () => {
        expect(app.truthy(89)).toBeTruthy()
    })
})


//______Challenge Three: A value that NOT false ___________________________________________________//

describe("Challenge Three: A value that NOT falsey", () => {
    test('What is returned is not falsy', ()=> {
        expect(app.notFalsy()).toEqual(true);
    })
})


//______Challenge Four:Create a function that creates an object with 2 properties, test to make sure that the objects properties are equal to your test function__________________________________________//
describe("Challenge Four:Create a function that creates an object with 2 properties, test to make sure that the objects ......", () => {
    test("object with two properties", () => {
        expect(app.twoObjects("twoObjects")).toEqual({ wine: "Pinot Grigio", vintage: 1964 })
    })
})

//______Challenge Five: A function that will return items in an array with 6 or more_________________________________//

//??//


//______Challenge Six: Can you refractor any of your code?____________//

//??//

//______Challenge Seven: Convert a number to a string____________//



describe("Challenge Seven: Convert a number to a string", () => {
    test('Convert a number to a string', ()=> {
        expect(app.numToString(5656)).toEqual("5656");
    })
})

//______Challenge Eight:  Display the correct planet with the number order it is away from the sun__________//

describe("Display the correct planet with the number order it is away from the sun_", () => {
    test('Display the correct planet with the number order it is away from the sun',()=> {
        expect(app.planets(1)).toEqual("Mercury")
    })
})
