#include <stdlib.h>
#include <string.h>

struct ListNode {
    int val;
    struct ListNode *next;
};
 
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    struct ListNode* result = malloc(sizeof(struct ListNode));
    struct ListNode* head = result;
    struct ListNode* toRemove = head;
    int carry = 0;

    while (l1 != NULL || l2 != NULL || carry != 0) {
        int cur1 = l1 != NULL ? (*l1).val : 0;
        int cur2 = l2 != NULL ? (*l2).val : 0;
        int sum = cur1 + cur2 + carry;

        struct ListNode* cur = malloc(sizeof(struct ListNode));
        (*cur).val = sum % 10;
        (*cur).next = NULL;
        (*result).next = cur;

        l1 = (l1 != NULL ? (*l1).next : NULL);
        l2 = (l2 != NULL ? (*l2).next : NULL);
        carry = sum / 10;
        result = cur;
    }

    head = (*head).next;
    free(toRemove);

    return head;
}