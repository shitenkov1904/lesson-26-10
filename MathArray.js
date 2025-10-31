class MathArray extends Array {
    constructor(arr){
        super(arr)
        this.arr = arr.split(' ').filter(el=>!Number.isNaN(+el))
    }
    sum(){
        return this.arr.reduce((sum,el)=>sum = sum + +el,0)
    } 
    arithm(){
        let q = this.arr.reduce((sum,el)=>sum = sum + +el,0)
        let y = q / this.arr.length
        return Math.floor(y)
    }
    even(){
        return this.arr.filter(el=>+el % 2 == 0)
    }
    bigger(){
        return this.arr.filter(el=>+el > 10)
    }
    string(){
        return this.arr.join('-')
    }
}
export default MathArray
