// SIMPLE PSEUDOCODE

// READ the given/selected array
// IF there's only one number
  // RETURN the number
// ELSE
  // Sort left half (of the left half of the left half) of numbers
  // Sort right half (of the right half of the right half) of numbers
  // Merge sorted halves
// ENDIF


// MORE COMPLEX PSEUDOCODE

// READ the given/selected array
// DIVIDE the selected array into two arrays by splitting it as evenly as possible
  // OBTAIN the left sub-array
  // IF there's only one number
    // RETURN the number
  // ELSE
    // DIVIDE that sub-array into two arrays by splitting it as evenly as possible
    // OBTAIN the left sub-array
      // IF there's only one number
        // RETURN the number
      // ELSE
        // DIVIDE that sub-array into two arrays by splitting it as evenly as possible
        // WHEN an array of length 1 cannot be split, its ready for merge
          // MERGE the selected arrays back together in sorted order
            // GET the minimum of the two values
            // ADD the selected value to the sorted array
            // WHEN one list becomes empty 
              // COPY all values from the remaining array into the sorted array
              // ADD the selected value to the sorted array
            // ENDMERGE
          // WHEN an array of length 1 cannot be split, its ready for merge
            // MERGE the selected arrays back together in sorted order
            // SELECT the smallest value from the front of each list (excluded already sorted values)
            // ADD the minimum of the two values to the sorted array
            // REPEAT this process
              // WHEN one list becomes empty 
                // COPY all values from the remaining array into the sorted array
                // ADD the selected value to the sorted array
            // UNTIL there are no more values left to add to the sorted array
          // ENDMERGE
  // OBTAIN the right sub-array and REPEAT the above
// MERGE the remaining selected arrays back together in sorted order
  // SELECT the smallest value from the front of each list (excluded already sorted values)
  // ADD the minimum of the two values to the sorted array
  // REPEAT this process
    // WHEN one list becomes empty 
      // COPY all values from the remaining array into the sorted array
      // ADD the selected value to the sorted array
  // UNTIL there are no more values left to add to the sorted array
// ENDMERGE


// Example algo for Merge Sort

// function merge(arr1, arr2, m, n) {
//   let i = 0;
//   let j = 0;
//   let k = 0;
//   let arr3 = []; // Array representing the previous two arrays merged together

//   // Comparing and copying elements
//   while (i <= m && j <= n) {
//     if (arr1[i] < arr2[j]) {
//       arr3[k++] = arr1[i++];
//     } else {
//       arr3[k++] = arr2[j++];
//     }
//   }

//   // These 'for' loops copy any remaining elements to the third array (arr3)
//   for ( ; i <= m; i++) {
//     arr3[k++] = arr1[i];
//   }

//   for ( ; j <= n; j++) {
//     arr3[k++] = arr2[j];
//   }
// }

// function mergeSort(low, high) {
//   if (low < high) {
//     mid = (low + high) / 2;
//     mergeSort(low, mid);
//     mergeSort(mid + 1, high);
//     merge(low, mid, high);
//   }
// }

// let odinSort1 = [3, 2, 1, 13, 8, 5, 0, 1];
// let odinSort2 = [105, 79, 100, 110];

// console.log(mergeSort(odinSort1, l, h)); 
// console.log(mergeSort(odinSort2, l, h));


// Example #2 algo for Merge Sort (based on freeCodeCamp's Merge Sort recursion walkthrough)

// Both arrays still show undefined whether or not this is active
let data = [];

// TODO: When we declare these, the code runs but we get 'undefined' arrays for both odinSort1 and odinSort2. Otherwise, we get the 'ReferenceError: start/end is not defined' on the console.logs
let start;
let end;

function merge(data, start, mid, end) {
  // Build a temp array to avoid modifying the original contents
  let tempArr = new Array(end - start + 1);

  let i = start;
  let j = mid + 1;
  let k = 0; // Why is k = 0 when i = start? Isn't 0 also start?

  // While both sub-arrays have values, then try and merge them together in sorted order
  while (i <= mid && j <= end) {
    if (data[i] <= data[j]) {
      tempArr[k++] = data[i++];
    } else {
      tempArr[k++] = data[j++];
    }
  }

  // Add the rest of the values from the left sub-array into the result
  while (i <= mid) {
    tempArr[k] = data[i];
    k++;
    i++;
  }

  // Add the rest of the values from the right sub-array into the result
  while (j <= end) {
    tempArr[k] = data[j];
    k++;
    j++;
  }

  for (i = start; i < end; i++) {
    data[i] = tempArr[i - start];
  }
}

function mergeSort(data, start, end) {
  if (start < end) {
    let mid = (start + end) / 2;
    mergeSort(data, start, mid);
    mergeSort(data, mid + 1, end);
    merge(data, start, mid, end);
  }
}

let odinSort1 = [3, 2, 1, 13, 8, 5, 0, 1];
let odinSort2 = [105, 79, 100, 110];

console.log(mergeSort(odinSort1, start, end)); 
console.log(mergeSort(odinSort2, start, end));