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
    ListNode* swapPairs(ListNode* head) {
        ListNode* it1; ListNode* it2;
        it1 = head; it2 = (it1 != NULL ? it1->next : NULL);
        
        ListNode ret = ListNode(-1);
        ret.next = it1;
        
        ListNode* last = &ret;
        while (it1 != NULL & it2 != NULL) {
            last->next = it2;
            it1->next = it2->next;
            it2->next = it1;
            
            last = it1;
            it1 = last->next;
            it2 = (it1 != NULL ? it1->next : NULL);
        }
        
        return ret.next;
    }
};