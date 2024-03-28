//输入一串url，输入一个key，找不到返回null，找到的话返回key的数组
function findKeyInUrl(url, key){
    if(url.indexOf(key) === -1){ return null }
    let res = []
    while (url.indexOf(key) !== -1){
        let idx = url.indexOf(key) + key.length
        url = url.slice(idx)
        res.push(key)
    }
    return res.length ? res : null
}