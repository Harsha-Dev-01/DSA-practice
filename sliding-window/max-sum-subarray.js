let arr = [5,2,3,1,6];
let k = 2;

let windowSum = 0;

for (let i = 0; i < k; i++){
    windowSum += arr[i];
}

let maxSum = windowSum;

for (let i = k; i < arr.length; i++){
    windowSum = windowSum - arr[i-k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
}

console.log(maxSum);