const user = {
    usrename:"vineet",
    price:999,
    welcomeMassag:function(){
        console.log(`${this.usrename},welcome to your website `);
        // console.log(this)
    }
}
// user.welcomeMassag()
// user.usrename ="sam"
// user.welcomeMassag()
// console.log(this);

// function chai(){
//     let usrename = "vineet"
//     console.log(this.usrename);
// }
//chai()

// const chai = () =>{
//     let uernamee = "vineet"
//     console.log(this.usrename)
// }
// chai()
// const addtwo = (num1, num2)=>{
//     return num1 + num2
// }
// const addtwo = (num1,num2)=> num1 + num2
// const addtwo = (num1,num2)=> (num1 + num2)
// const addtwo = (num1,num2)=> ({username:"shivam"})
// console.log(addtwo(3,4))

//immediately invoked function expressins (iiFe)


// (function chai(){
//     console.log(`DB CONNECTD`)
// })()

// ( (name) => {
//     console.log(`db connected two ${name}`);
// })('vineet')

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')