/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * leetcode题目，移除链表中指定的内容
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let arrNode = new ListNode(0, head)
    let curr = arrNode
    while(curr.next){
        if(curr.next.val === val){
            curr.next = curr.next.next
            continue
        }
        curr = curr.next
    }
    return arrNode.next
};