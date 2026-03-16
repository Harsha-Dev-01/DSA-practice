let arr = [2,7,11,15];
let target = 9;

let map = {};

for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if (map[complement] !== undefined) {
        console.log([map[complement], i]);
        break;
    }

    map[arr[i]] = i;
}