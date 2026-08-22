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
     * @param {TreeNode} root
     * @return {number}
     */
    maxDepth(root: TreeNode | null): number {
        if (!root) return 0;

        // BFS
        let level = 0;
        let queue = [root];

        while(queue.length > 0) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let el = queue.shift();
                
                if (el.left) {
                    queue.push(el.left);
                }
                
                if (el.right) {
                    queue.push(el.right)
                }
            }

            level++;
        } 

        return level;
    }

    
}
