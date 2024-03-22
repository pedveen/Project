// array 

const myArr = [0,1,2,3,4,5,6];
const myHeros =  ["hulk", 'ironman','don'];
const myArr2 = new Array(1,2,3,4);
// console.log(myArr);

//  Array method 

// myArr.push(6);
// myArr.pop();

// myArr.unshift(5);
// myArr.unshift(6);
// myArr.shift();

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));

const newArr = myArr.join();

// console.log(myArr);
// console.log(newArr);

// splice slice 

console.log("A ", myArr)
const myn1 = myArr.slice(1,4);

console.log(myn1)
console.log("B ", myArr)

const myn2 = myArr.splice(1,4);

console.log(myn2)
console.log("C ", myArr)
