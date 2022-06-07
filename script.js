function filterRange(arr, a, b) {
    return arr.filter (item => (a <= item && item <= b));
}
let arr = [4, 2, 8, 10, 6]
let filtered = filterRange(arr, 1, 5);
console.log(filtered);
console.log(arr);