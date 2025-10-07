// Requirements
// TDD - create tests for a module that will:
//  Obscure credit card numbers except the last 4 digits
//  Test make sure the function obscures credit card numbers that are between the length of 12 and 16 digits
//  Input: 123456789012
//  Output: XXXXXXXX9012

const total = require("./total");

//  Create a module that takes in prices in arrays and results the total

describe('Total Module Tests', () => {
    test('As a user I want to be able to get the total after submitting various prices', () => {
        expect(total([2.5, 78.12, 12.89])).toEqual(93.51);
    });
});