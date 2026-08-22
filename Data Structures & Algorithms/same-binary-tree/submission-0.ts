/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {

        let dfs = (p: TreeNode | null, q: TreeNode | null):boolean => {
            if (!p && !q) {
                return true;
            }

            if (p && q && p.val === q.val) {
                return dfs(p.left, q.left) && dfs(p.right, q.right);
            } else {
                return false;
            }
        }

        return dfs(p,q);
    }

}
