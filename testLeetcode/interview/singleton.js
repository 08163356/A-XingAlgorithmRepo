const singleton = (
    function (){
        let instance
        function createInstance(){
            const obj = new Object("this a singleton test")
            return obj
        }
        return  {
            getInstance: function(){
            if(!instance){
                createInstance()
            }
            return instance
        }
    }}
)()

let instance1 = singleton.getInstance()