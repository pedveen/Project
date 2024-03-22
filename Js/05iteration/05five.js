const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ // callback function not have identifer
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

const obj ={id:2,nmae:'pankaj'};
const arr =[1,2,3,4];
const str = "pankaj";
// obj.forEach((item)=> console.log(item))
// arr.forEach((item)=> console.log(item)); //for each use only in array
// str.forEach((item)=> console.log(item));