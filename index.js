const algorithms = require('./quick-sort');

const sort = algorithms();

const myArr = [3, 7, 1, 2, 5, 4, 8, 9, 6];
sort.quickSort(myArr);

console.log(sort.quickSort(myArr));