/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode(int x) : val(x), left(NULL), right(NULL) {}
 * };
 */
class Solution {
private:
    unordered_map<int, int> base;
public:
    bool findTarget(TreeNode* root, int k) {
        base = unordered_map<int, int>();
        return findNumber(root, k);
    }
    
    bool findNumber(TreeNode* node, const int& k) {
        if (base.count(k-(node->val))) return true;
        base[node->val] = 1;
        if (node->left != NULL && findNumber(node->left, k)) return true;
        if (node->right != NULL && findNumber(node->right, k)) return true;
        return false;
    }
};