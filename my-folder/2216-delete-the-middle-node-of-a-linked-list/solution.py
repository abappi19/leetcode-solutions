# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.next is None:
            return None
        
        fast = head.next.next
        slow = head

        while fast is not None and fast.next is not None:
            fast = fast.next.next
            slow = slow.next
        slow.next = slow.next.next
        return head
