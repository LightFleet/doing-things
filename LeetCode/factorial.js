fb = (n) => {
    if (n === 1) return 1;
    return n*fb(n-1);
}

console.log(fb(5))