// MERGE the selected arrays back together in sorted order
function merge(left, right) {
  // SET a temporary array to avoid modifying the contents of the original array when dealing with the sub-arrays
  let tempArr = [];

  // SET the index points for the "left" sub-array and the "right" sub-array
  let i = 0;
  let j = 0;

  // WHILE both sub-arrays have values
  while (i < left.length && j < right.length) {
    // GET the minimum of the two values
    if (left[i] < right[j]) {
      // ADD the selected value to the sorted array
      tempArr.push(left[i++]);
    } else {
      tempArr.push(right[j++]);
    }
  }

  // ADD any remaining values from either sub-array into the temporary array
  return tempArr
    .concat(left.slice(i))
    .concat(right.slice(j));
}
// ENDMERGE

// READ the given/selected array
function mergeSort(arr) {
  // IF the array only has a single value
  if (arr.length === 1) {
    // PRINT the array as its already sorted
    return arr;
  }
  // ENDIF

  // DIVIDE the selected array into two sub-arrays by splitting it as evenly as possible
  const mid = Math.floor(arr.length / 2); // SET the midpoint of the array before dividing it
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  
  // OBTAIN the left sub-array, then...
  return merge(
    // CALL 'mergeSort' itself recursively using the midpoint instead of the last index as the final array item
    mergeSort(left), 
    // CALL 'mergeSort' itself recursively using the index after the midpoint instead of the first index as the first array item
    mergeSort(right) 
  );
}

let odinSort1 = [3, 2, 1, 13, 8, 5, 0, 1];
let odinSort2 = [105, 79, 100, 110];

console.log(mergeSort(odinSort1)); 
console.log("Done!");

console.log(mergeSort(odinSort2));
console.log("Done!");