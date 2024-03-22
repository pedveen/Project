// Immediately Invoked Function Expressions (IIFE)
// IIFE is used for globaly pollution variable

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // this semicolon is must in IIFE when we used many expression

( (name) => {
    // unnamed IIFE 
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')