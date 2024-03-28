let n = new Promise((resolve, reject)=>{
    console.log(1)
    resolve()
    console.log(2)
    reject()
    console.log(5)
})
n.then(()=>{
    console.log(3)
},()=>{
    console.log(6)
})
console.log(4)

// 同步任务的代码先执行完了再执行then里面的

// 1
// 2
// 5
// 4
// 3
