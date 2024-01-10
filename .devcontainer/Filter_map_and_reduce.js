const coding = ["js","rudy","java","python"]

const values = coding.forEach((item)=>{
    //console.log(item);
    return item
})
//console.log(values)

const mynumer = [1,2,3,4,5,6,7,8]

//const  newnums = mynumer.filter((num) => num > 4)
// const  newnums = mynumer.filter((num) =>{
//     return num>4
// })

const newnums = []

mynumer.forEach((num)=>{
    if(num > 4){
        newnums.push(num)
    }
})
//console.log(newnums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //let userBOOK = books.filter((bk)=>bk.genre==="History")
  let userBOOK = books.filter((bk) =>{
    return bk.publish >= 1900 && bk.genre === "History"
  })
  //console.log(userBOOK)

  const newnum = mynumer.map((num) =>{
    return num*10;
  })
  //console.log(newnum);


  const newnu = mynumer
                .map((num) => num*10)
                .map((num)=>num+1)
                .filter((num)=> num >= 40)
//console.log(newnu);

// reduce
const myarr = [1,2,3]  
// const mytotal = myarr.reduce(function (acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc+currval
// },0)

const mytotal = myarr.reduce((acc,curral) =>{
    //console.log(`${acc},and ${curral}`)
    return acc +curral
},0)
//console.log(mytotal)

const shoppingcart = [
    {
        itemName:"js course",
        prise:2000
    },
    {
        itemName:"c++ course",
        prise:3242
    },
    {
        itemName:"java course",
        prise:7897
    }
]

const total = shoppingcart.reduce((acc,item) => acc+item.prise,0)
console.log(total)