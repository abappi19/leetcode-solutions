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
     * @param ListNode $l1
     * @param ListNode $l2
     * @return ListNode
     */
    function addTwoNumbers($l1, $l2) {
        $head = new ListNode();
        $tail = $head;
        $carry = 0;

        while($l1 || $l2 || $carry>0){
            $sum = $carry;

            if($l1){
                $sum+=$l1->val;
                $l1 = $l1->next;
            }
            if($l2){
                $sum+=$l2->val;
                $l2 = $l2->next;
            }

            $digit = $sum % 10;
            $carry = floor($sum / 10);

            $tail->next = new ListNode($digit);
            $tail = $tail->next;


            // print_r("digit : $digit carrry: $carry sum : $sum");
            
        }

        return $head->next;
    }
}
