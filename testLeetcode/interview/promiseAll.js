function myPromiseAll(arr){
    return new Promise((resolve, reject)=>{
        if(!Array.isArray(arr)) { return reject(new TypeError("you need input right params")) }
        let counter = 0
        let results = []
        arr.forEach((item, idx)=>{
            item.resolve()
                .then((res)=>{
                    results[idx] = res
                    counter++
                    if(counter === arr.length){
                        resolve(results)
                    }
                })
                .catch((error)=>{
                    reject(error)
                })
        })
    })
}