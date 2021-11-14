fb = (n) => {
    if (n < 2) return n;
    return fb(n-1) + fb(n-2);
}

console.log(fb(10))