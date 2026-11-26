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
     * @return {number[][]}
     */
    levelOrder(root: TreeNode | null): number[][] {
        let result = [];
    
        if (!root) {
            return [];
        }

        let queue = [root];
        result.push([root.val])

        while(queue.length > 0) {
            let size = queue.length;
            let level = []
            for (let i = 0; i < size; i++) {
                let el = queue.shift();

                if (el.left) {
                    queue.push(el.left);
                    level.push(el.left.val);
                } 

                if (el.right) {
                    queue.push(el.right)
                    level.push(el.right.val);

                }
            }
            
            if (level.length) {
                result.push(level); 
            }
        }
        return result;
    }
}
