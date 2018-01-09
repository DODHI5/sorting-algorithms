module.exports = function sort() {

  return {
    quickSort: quickSort,
  }
};

function quickSort(n) {
  let left = [];
  let right = [];
  if (n.length < 2) {
    return n;
  }

  for (let i = 1; i < n.length; i++) {
    if (n[i] < n[0])
      left.push(n[i]);

    if (n[i] >= n[0])
      right.push(n[i]);

  }
  return quickSort(left).concat(n[0], quickSort(right));

};

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let middle = arr[Math.floor(arr.length / 2)];
  let leftIndex = arr.slice[0];
  let rightIndex = arr.slice[arr.length - 1];

  return merge(mergeSort(leftIndex), (mergeSort(rightIndex)));

}

function merge(leftIndex, rightIndex) {

  let sorted = [];

  while (leftIndex.length && rightIndex.length) {
    if (leftIndex[0] <= rightIndex[0]) {
      sorted.push(leftIndex.shift());
    } else {
      sorted.push(rightIndex.shift());
    }
  }
  while (leftIndex.length)
    sorted.push(leftIndex.shift());
  while (rightIndex.length)
    sorted.push(rightIndex.shift());
  return sorted;

};