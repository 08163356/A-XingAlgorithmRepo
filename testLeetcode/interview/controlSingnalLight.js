//红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promse实现）三个亮灯函数已经存在
//解析红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次，意思就是3秒，执行一次 red 函数，2秒执行一次 green 函数，1秒执行一次 yellow 函数，不断交替重复亮灯，意思就是按照这个顺序一直执行这3个函数，这步可以就利用递归来实现。
function red() {
    console.log('red');
}
function green() {
    console.log('green');
}
function yellow() {
    console.log('yellow');
}

function light(timer, cb){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            cb()
            resolve()
        }, timer)

    })
}

function step(){
    Promise.resolve().then(()=>{
        return light(300, red)
    }).then(()=>{
        return light(200, green)
    }).then(()=>{
        return light(200, yellow)
    }).then(()=>{
        step()
    })
}
step()
