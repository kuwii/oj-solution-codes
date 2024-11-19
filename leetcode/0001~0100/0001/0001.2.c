// hash - 92.68%

#define SEED 92083

int* twoSum(int* nums, int numsSize, int target, int* returnSize) {
    int* result = malloc(2 * sizeof(int));
    int* hashKey = calloc(SEED, sizeof(int));
    int* hashValue = malloc(SEED * sizeof(int));
    int* hashIndex = malloc(SEED * sizeof(int));

    *returnSize = 2;

    for (int i = 0; i != numsSize; ++i) {
        int targetNum, targetAbs, targetHash, j;
        int num = nums[i];

        targetNum = target - num;
        targetHash = (targetNum >= 0 ? targetNum : -targetNum) % SEED;
        for (j = targetHash; hashKey[j] == 1 && hashValue[j] != targetNum; j = (j + 1) % SEED);
        if (hashValue[j] == targetNum) {
            result[0] = i;
            result[1] = hashIndex[j];
            return result;
        }

        targetNum = num;
        targetHash = (targetNum >= 0 ? targetNum : -targetNum) % SEED;
        for (j = targetHash; hashKey[j] == 1 && hashValue[j] != targetNum; j = (j + 1) % SEED);
        hashKey[j] = 1;
        hashValue[j] = targetNum;
        hashIndex[j] = i;
    }

    free(hashKey);
    free(hashValue);
    free(hashIndex);

    return result;
}
