let arr = ["10", "5", "40", "25", "1000"]
// arr.sort()
console.log(arr)

//上面的代码没有按照数值的大小对数字进行排序，
//要实现这一点，就必须使用一个排序函数
//若 a 小于 b，在排序后的数组中 a 应该出现在 b 之前，则返回一个小于 0 的值。
//若 a 等于 b，则返回 0。
//若 a 大于 b，则返回一个大于 0 的值。
// arr.sort(function(a,b){
//     return a - b
// })
// console.log(arr)

let obj =  {
    
    sort1(a,b){
        return a - b
    }
}
//使用箭头函数
// arr2 = arr.sort((a,b) => {
//     return a - b
// })

// 当只有一行语句，并且需要返回结果时，可以省略 {} , 结果会自动返回。
//当只有一个参数时，可以不使用花括号
arr.sort(obj.sort1)
console.log(arr)