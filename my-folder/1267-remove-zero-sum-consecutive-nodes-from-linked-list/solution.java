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
    public ListNode removeZeroSumSublists(ListNode head) {
        ListNode dummy = new ListNode(0);
        dummy.next = head;
        Map<Integer, ListNode> m = new HashMap<>();
        int preSum = 0;
        
        m.put(0, dummy);

        while(head != null){
            preSum += head.val;
            m.put(preSum, head);
            head = head.next; 
        }

        head = dummy;
        int s = 0;

        while(head!=null){
            s += head.val;
            head.next = m.get(s).next;
            head = head.next;
        }

        return dummy.next;
    }
}
