/* У простого преобразования числа в строку для этого задания есть подводный камень -
нужно выравнивать разрядность числа, т.е. дописывать 0..*/

function numToStr(n) {
    const obj={}
    if (n>=0 && n<=999) {
        let numStr = n.toString()
        if (numStr.length == 1) {numStr='00'+numStr}
        if (numStr.length == 2) {numStr='0'+numStr}
        [obj.sot, obj.des, obj.ed] = numStr.split('')
    }
    return obj
}

const result=numToStr(9)
console.log(result)