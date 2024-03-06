/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun addTwoNumbers(l1: ListNode?, l2: ListNode?): ListNode? {
        var t1 = l1;
        var t2 = l2;
        var head:ListNode? =  ListNode()
        var tail:ListNode? = head
        var carry = 0

        while(t1 !=null || t2 !=null || carry > 0){
            var sum = carry;
            if(t1 != null){
                sum+=t1.`val`
                t1 = t1.next
            }
            if(t2 != null){
                sum+=t2.`val`
                t2 = t2.next
            }

            var digit = sum % 10

            carry = sum / 10

            tail?.next =  ListNode(digit)
            tail = tail?.next


        }
        return head?.next
    }
}
