var a = 10
var obj = {
    a: 20,
    x:()=>{
        console.log(this)
    },
    y:function (){
        console.log(this)
    }
}
var tmp = obj.y
tmp()
obj.y()
obj.x()