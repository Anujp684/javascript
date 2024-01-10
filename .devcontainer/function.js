function normal(){console.log("h1");
console.log("h1");
console.log("h1");
console.log("h1");
console.log("h1");
console.log("h1");
}
// normal()

function addtwonumber(number1,number2){
    console.log(number1+number2);
}

// let result = addtwonumber(3,4)
// console.log(result);

function addtwonumber(number1,number2){
    
    return number1+number2;
}

// const result = addtwonumber(3,4)
// console.log(result);

function loginUserMessage(username ){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())

function calculateprise(val1,val2, ...num1){
    return console.log(val1,val2,num1);
}
// calculateprise(200,400,500,600)

const user = {
    username:"vineet",
    prisces:100 
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and prise is a ${anyobject.price}`)

}
// handleobject(user)
handleobject({
    username:"sam",
    price:399
})
const myNewArray = [200,400,100,600]
function returnSecondvalue(getArray){
    return getArray[1]
}
// console.log(returnSecondvalue(myNewArray));
// console.log(returnSecondvalue([200,400,500,1000]))

