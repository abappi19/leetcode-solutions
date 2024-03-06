/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let head:ListNode = new ListNode();
    let tail:ListNode = head;
    let carry = 0;

    while (l1 || l2 || carry > 0) {
        let sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        let digit = sum % 10;
        carry = Math.floor(sum / 10);

        tail.next = new ListNode(digit);
        tail = tail.next;

        l1 = l1?.next;
        l2 = l2?.next;
    }

    return head.next;
    
};
