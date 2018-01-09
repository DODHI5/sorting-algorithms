module.exports = function sort() {

  return {
    quickSort: quickSort,
  }
};

function quickSort(n) {
  let left = [];
  let right = [];
  if (n.length <= 1){ 
    return n;}
  
  for (let i = 1; i < n.length; i++) {
    if (n[i] < n[0]) 
      left.push(n[i]);
    
    if (n[i] >= n[0]) 
      right.push(n[i]);
    
  }
  return quickSort(left).concat(n[0], quickSort(right));

};