["","",""]
[{},{},{}]

//for of loop

const arr = [1,2]

for(const num of arr){
    // console.log(num);
}

const greetings = "hello world"
for(const greet of greetings){
    // console.log(greet)
    // console.log(`each char is ${greet}`)
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"UNITED STATES OF AMERICA")
map.set('fr',"fance")

// console.log(map);

for(const [key,value] of map){
    //console.log(key,':-',value)
}

const myObject = {
    'game1': 'NFS',
    'gae2':'spiderman'
}

//for(const [key,value] of myObject){
    // console.log(key,':-',value);
//}

//for in loop

for (const key in myObject) {
    //console.log(`${key}${myObject[key]}`);
    }

const programming = ["js","rb","py","java"];

for (const key in programming) {
    //console.log(`${key},${programming[key]}`)
}

programming.forEach(function(item){
    // console.log(item)
})
programming.forEach((item)=>{
    //console.log(item);
})

function prinme(item) {
    //console.log(item)
}
programming.forEach(prinme)

programming.forEach((item,index,arr)=>{
    //console.log(`${item},${index},${arr}`);
})

const coding = [
    {
        langageName:"javascript",
        languageFiileName:"js"
    },
    {
        langageName:"java",
        languageFiileName:"java"
    },
    {
        langageName:"python",
        languageFiileName:"python"
    }
]

coding.forEach((item)=>{
    console.log(item.languageFiileName);
})