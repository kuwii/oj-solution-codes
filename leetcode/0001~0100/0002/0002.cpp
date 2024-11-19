/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int add = 0;
        ListNode *ret_start = new ListNode(0);
        ListNode *ret_cur = ret_start;
        while (l1 != NULL || l2 != NULL || add != 0) {
            int l1_cur = 0, l2_cur = 0;
            if (l1 != NULL) {
                l1_cur = l1->val;
                l1 = l1->next;
            }
            if (l2 != NULL) {
                l2_cur = l2->val;
                l2 = l2->next;
            }
            int sum = l1_cur + l2_cur + add;
            ret_cur->next = new ListNode(sum % 10);
            ret_cur = ret_cur->next;
            add = sum / 10;
        }
        return ret_start->next;
    }
};