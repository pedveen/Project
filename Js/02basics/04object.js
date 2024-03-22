// const tinderUser = new Object() //this is singlton object
const tinderUser = {} //this is not singlton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4) //this is uused for merage all objects

const obj3 = {...obj1, ...obj2} // merge all objects
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // give all keys in array
// console.log(Object.values(tinderUser)); // give all key values in array
// console.log(Object.entries(tinderUser)); // give all key and values in in single array with seprate array

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor); // destructuring
console.log(instructor); // destructuring

//this is json data
// {
//     "name": "hitesh",
//     "coursename": "js in hindi", 
//     "price": "free"
// }

[
    {},
    {},
    {}
]