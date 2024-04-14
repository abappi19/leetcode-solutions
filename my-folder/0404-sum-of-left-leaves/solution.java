/**
 * Definition for a binary tree node.
 * public class TreeNode {
 * int val;
 * TreeNode left;
 * TreeNode right;
 * TreeNode() {}
 * TreeNode(int val) { this.val = val; }
 * TreeNode(int val, TreeNode left, TreeNode right) {
 * this.val = val;
 * this.left = left;
 * this.right = right;
 * }
 * }
 */
class Solution {
    public int sumLeftNodes(TreeNode target) {
        int res = 0;

        if (target == null)
            return res;

        if (target.left != null) {
            if (target.left.left == null
                    && target.left.right == null) {
                res += target.left.val;
            } else {
                res += sumLeftNodes(target.left);
            }

        } 
        
        if (target.right != null) {
            res += sumLeftNodes(target.right);
        }

        return res;

    }

    public int sumOfLeftLeaves(TreeNode root) {
        int res = sumLeftNodes(root);
        return res;
    }
}
