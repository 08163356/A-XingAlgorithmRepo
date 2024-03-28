
function frontOrderTraversal(tree){
    if(tree === null){ return [] }
    let res = []
    function travserval(tree){
        if(tree === null){ return }
        res.push(tree.value)
        travserval(res.left)
        travserval(res.right)
    }

    travserval(tree)
    return res
}

function middleOrderTraversal(tree){
    if(tree === null){ return [] }
    let res = []
    function traversal(treeNode){
        if(treeNode === null){ return }
        traversal(treeNode.left)
        res.push(treeNode.value)
        traversal(treeNode.right)
    }
    traversal(tree)
    return res
}
function behindOrderTraversal(tree){
    if(tree === null){ return [] }
    let res = []
    function travseral(treeNode){
        if(treeNode === null){ return }
        travseral(treeNode.left)
        travseral(treeNode.right)
        res.push(treeNode.value)
    }
    travseral(tree)
    return res
}