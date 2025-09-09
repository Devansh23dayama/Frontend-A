// var arr=  ['Math101', 'Eng102'] 
// var arr1= arr.map((a)=> `course: ${a}`)
// console.log(arr1)


// var arr = ['Rahul Sharma', 'Anita Das']
// var arr1 = arr.map((a)=>`${a}`)
// var arr2= arr1.LowerCase(a)
// console.log(arr2)


// const arr =[1,2,3,4,5,6,7,8]
// let ans= arr.map((a)=>a*5)
// console.log(ans)

// const arr =[1,2,3,4,5,6,7,8]
// let ans= arr.map((a,i)=>(i % 3 == 0 ? a * 2 : a))
// console.log(ans)

// const arr =['Math101','Eng102']
// let ans= arr.map((a)=>`course:${a}`)
// console.log(ans)



const arr = ['Rahul Sharma', 'Anita Das']
let ans= arr.map((a)=> a.toLowerCase().replace(" ","."))

console.log(ans)