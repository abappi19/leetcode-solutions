/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  ListNode? deleteMiddle(ListNode? head) {
      if(head?.next == null) return null;
      ListNode? fast = head?.next?.next;
      ListNode? slow = head;

      while(fast !=null && fast.next !=null){
          fast = fast.next?.next;
          slow = slow?.next;
      }

      slow?.next =slow.next?.next;
      return head;
    
  }
}
