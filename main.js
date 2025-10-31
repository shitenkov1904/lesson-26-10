import MathArray from "./MathArray.js"
const b1 = document.querySelector('.b1')
const result1 = document.querySelector('.result1')
const b2 = document.querySelector('.b2')
const result2 = document.querySelector('.result2')
const b3 = document.querySelector('.b3')
const result3 = document.querySelector('.result3')
const b4 = document.querySelector('.b4')
const result4 = document.querySelector('.result4')
const b5 = document.querySelector('.b5')
const result5 = document.querySelector('.result5')
const mInp = document.querySelector('.main-input')
b1.onclick = () =>{
    const myArr = new MathArray(mInp.value)
    result1.innerText = myArr.sum()
}
b2.onclick = () =>{
    const myArr = new MathArray(mInp.value)
    result2.innerText = myArr.arithm()
}
b3.onclick = () =>{
    const myArr = new MathArray(mInp.value)
    result3.innerText = myArr.even()
}
b4.onclick = () =>{
    const myArr = new MathArray(mInp.value)
    result4.innerText = myArr.bigger()
}
b5.onclick = () =>{
    const myArr = new MathArray(mInp.value)
    result5.innerText = myArr.string()
}
