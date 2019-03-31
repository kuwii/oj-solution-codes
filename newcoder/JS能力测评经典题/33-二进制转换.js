function valueAtBit(num, bit) {
    return (num >> (bit-1)) & 1;
}