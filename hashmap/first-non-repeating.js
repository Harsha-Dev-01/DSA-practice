let str = "leetcode";

let map = {};

for (let char of str) {
    map[char] = (map[char] || 0) + 1;
}

for (let char of str) {
    if (map[char] === 1) {
        console.log(char);
        break;
    }
}