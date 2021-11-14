const sumOfTwo = (nums, target) => {
    const numObject = {}
    nums.forEach((el, idx) => {
        numObject[nums[idx]] = idx
    })
    for (let i=0; i < nums.length; i++){
        const diff = target - nums[i];

        if (numObject[diff]){
            return [i, numObject[diff]]
        }
    }
}

console.log(sumOfTwo([2,7,11,15], 22))