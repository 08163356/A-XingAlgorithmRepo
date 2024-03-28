const p1 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("resolve3")
        console.log("timer1")
    }, 0)
    resolve("resolve1")
    resolve("resolve2")
}).then(res =>{
    console.log("test", res)
    setTimeout(()=>{
        console.log("timer2")
    }, 0)
    return 333
}).finally(res =>{
    console.log("finally", res)
})
// 个人分析：resolve1 ->resole1-> finallyresolve1 -> timer1 -> resolve2 ->resolve2 -> timer2
// resolve1
// finally undefined
// timer1
// timer2
