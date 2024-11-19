// sort - 100%

struct Number {
    int number;
    int index;
};

int cmp(void* a, void* b) {
    return (*(struct Number*)a).number - (*(struct Number*)b).number;
}

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    struct Number* tmp = malloc(sizeof(struct Number) * numsSize);
    int* result = malloc(2 * sizeof(int));

    for (int i = 0; i != numsSize; ++i) {
        (*(tmp + i)).index = i;
        (*(tmp + i)).number = nums[i];
    }

    *returnSize = 2;
    qsort(tmp, numsSize, sizeof(struct Number), cmp);

    int i = 0, j = numsSize - 1;
    int sum = (*(tmp + i)).number + (*(tmp + j)).number;
    while (sum != target) {
        if (sum < target) {
            ++i;
        } else {
            --j;
        }
        sum = (*(tmp + i)).number + (*(tmp + j)).number;
    }

    result[0] = (*(tmp + i)).index;
    result[1] = (*(tmp + j)).index;

    free(tmp);

    return result;
}
