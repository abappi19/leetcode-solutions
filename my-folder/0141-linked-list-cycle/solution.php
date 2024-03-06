/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val) { $this->val = $val; }
 * }
 */

class Solution {
    /**
     * @param ListNode $head
     * @return Boolean
     */
    function hasCycle($head) {

    $fast = $head;

    while($fast && $fast->next){
        $head = $head->next;
        $fast = $fast->next->next;

        if($head === $fast) return true;
    }
        
        return false;
    }
}
