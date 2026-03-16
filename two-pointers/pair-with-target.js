let arr = [1,2,3,4,6];
let target = 6;

let left = 0;
let right = arr.length - 1;

while (left < right) {

    let sum = arr[left] + arr[right];

    if (sum === target) {
        console.log(true);
        break;
    }

    if (sum < target) {
        left++;
    } else {
        right--;
    }
}