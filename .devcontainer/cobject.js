// singleton
// Object.create

// object literals

const mySym =Symbol("key1")

const jsuser ={
    name:"mayank",
    age:18,
    [mySym]:"mykey1",
    location:"indore",
    email:"anuj_prajapat@gamil.com",
    isloggedin:false,
    lastloginDays:["Sunday","monday"]
}
// console.log(jsuser.mySym);
// console.log(typeof jsuser[mySym]);
// console.log(jsuser.email)
// console.log(jsuser["email"])

// jsuser.email ="apj.@gmail.com"
// Object.freeze(jsuser)
// jsuser.email ="ramji@gmail.com"
// console.log(jsuser);

// jsuser.greeting = function(){
//     console.log("hello js user")
// }
// jsuser.greetingtwo =function(){
//     console.log(`hellow js user,${this.name}`);
// }
// console.log(jsuser.greeting());
// console.log(jsuser.greetingtwo());

// const tinderUser = new Object();
 const tinderUser = {}

tinderUser.id =  "1234ujind"
tinderUser.name = "sammy"
tinderUser.isloggedin = false
// console.log(tinderUser) 

// const regulUser ={
//     email: "anuj.prajapat.gamil.com",
//     fullname:{
//         firstname:"shivam",
//         lastname:"vineet"
//     }
// }

// // console.log(regulUser)
// console.log(regulUser.fullname.lastname); 

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 = {
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}
//const obj3 = Object.assign({},obj1,obj2,obj4);
const obj3 = {...obj1,...obj2}
const user = [
    {},
    {},
    {},
    {},
]
user[1].email
// console.log(obj3);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));
//console.log(tinderUser.hasOwnProperty('isloggedin'));

//de-structure

const course = {
    coursename:"js in hindi",
    prise:"999",
    courseInstructor:"vineet"
}

const {courseInstructor: Instructor} = course
console.log(Instructor);

const navbar = ({company}) => {

}

navbar(company = "shiavam")
console.log(navbar.company);