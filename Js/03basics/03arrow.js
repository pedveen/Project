const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // this not use for function scope gernallay when we log only this then function return unusal data in object
// }

// console.log(chai());

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username); // output undefined
// }
// console.log(chai);

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);// give empty object
//     console.log(this.username); // give undifened
// }

// console.log(chai()) 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) //explicit return


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()