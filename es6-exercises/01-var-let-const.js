// This is a common mistake made in JavaScript.
// In the code below, we create a number of functions in a loop, and
// each one refers to a variable that was declared outside these functions.
// All of the functions will end up referring to the same value, after it's
// incremented to 10. Thus, callbacks[2] does not log 2. It logs 10, as do all
// functions in the array.
// Devs often encounter this problem when adding event listeners to a group of items
//
// Do you know the solution for such situations in ES5?
// Use ES6 to create a "cleaner" solution?

"use strict"

var callbacks = []
for (let i = 0; i < 10; i++) {
  callbacks.push(function() { console.log(i) })
}

callbacks[2]()



// Source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Closing_over_scope
