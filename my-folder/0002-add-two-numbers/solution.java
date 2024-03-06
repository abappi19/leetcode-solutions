/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {

        ListNode head = new ListNode(0);
        ListNode tail = head;

        int carries = 0, sum = 0, digit = 0;
        while (l1 != null || l2 != null || carries > 0) {
            sum = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carries;
            digit = sum % 10;
            carries = sum / 10;

            tail.next = new ListNode(digit);
            tail = tail.next;

            l1 = l1 != null ? l1.next : null;
            l2 = l2 != null ? l2.next : null;
        }

        return head.next;

    }
}
