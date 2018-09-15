'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(str){
    let arr = str.split(' ');
    for (let i = 0; i < arr.length - 1; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase();
    }
    return arr.join(' ');
     }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')

assert.strictEqual(jadenCase.length, 1)
assert.strictEqual(jadenCase("attention DANGER ?"), "Attention Danger ?")
assert.strictEqual(jadenCase("AttenTION danger ?"), "Attention Danger ?")
assert.strictEqual(jadenCase("ATTENTION danger ?"), "Attention Danger ?")
assert.strictEqual(jadenCase("attention danger ?"), "Attention Danger ?")


// End of tests */
