function otp(a){
let power= Math.pow(10,a)
const otp= Math.ceil(Math.random()*power)
console.log(otp)
}


otp(4)