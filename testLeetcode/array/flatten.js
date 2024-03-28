/**
 * @description 实现一个函数，将数组扁平化（用递归实现）
 * @param {Array} arr
 * @return  {Array}
 */
const arr = [1,[2,3,4],[5,6]]
function flatten(arr) {
    let flattened = []
    arr.forEach((element, i)=>{
        if(Array.isArray(element)){
            flattened = flattened.concat(flatten(element))
        } else {
            flattened.push(element)
        }
    })
    return flattened
}
// const arr = [1,2,3,4,5,5,6]
console.log(flatten(arr))