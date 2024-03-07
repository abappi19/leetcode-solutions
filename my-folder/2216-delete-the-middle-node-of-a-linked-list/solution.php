/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function deleteMiddle($head) {
        if(!$head->next) return null;

        $fast = $head->next->next;
        $slow = $head;
        
        while($fast && $fast->next){
            $fast = $fast->next->next;
            $slow = $slow->next;
        }
        $slow->next = $slow->next->next;

        return $head;
    }
}
