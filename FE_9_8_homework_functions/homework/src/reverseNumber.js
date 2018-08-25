function reverseNumber(n) {
    const reversed = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(reversed);
}