
/**
 * @param {number[]} n
 * @param {number} val
 * @return {number}
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
 *
 */
let testCase= [ 3, 4]
const removeElement = function(n) {
    let loop = Math.floor(n/2)
    let mid = Math.floor(n/2)
    let count = 1
    let res = new Array(n).fill(0)
    res.forEach((v, i)=>{ res[i] = new Array(n).fill(0) })
    console.log(res)
    let offset = 1
    let startX = 0, startY = 0
    while (loop > 0){
        let row = startX
        let col = startY
        //从左到右
        for(;col < n - offset; col++){
            res[row][col] = count++
        }
        //右侧从上到下
        for(;row < n - offset; row++){
            res[row][col] = count++
        }



        //从下到上
        for(;col > startY ; col--){
            res[row][col] = count++
        }
        //下边从右到左
        for(;row > startX; row--){
            res[row][col] = count++
        }
        startY++;
        startX++;
        loop--
        offset++
    }
    if(n%2===1){ res[mid][mid] = count }
    return res

};
for(let i = 0; i<testCase.length; i++){
    console.log(`this is case${i},and the res is ${removeElement(testCase[i])}`)
}
