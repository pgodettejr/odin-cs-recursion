// Example algo for Merge Sort

// function mergeSort(l, h) {
//   if (l < h) {
//     mid = (l + h) / 2;
//     mergeSort(l, mid);
//     mergeSort(mid + 1, h);
//     merge(l, mid, h);
//   }
// }


// Example #2 algo for Merge Sort (based on freeCodeCamp's Merge Sort recursion walkthrough)

// let data = [];

// function mergeSort(data, start, end) {
//   if (start < end) {
//     let mid = (start + end) / 2;
//     mergeSort(data, start, mid);
//     mergeSort(data, mid + 1, end);
//     merge(data, start, mid, end);
//   }
// }

// function merge(data, start, mid, end) {
//   // Build a temp array to avoid modifying the original contents
//   let tempArr = new Array(end - start + 1);

//   let i = start;
//   let j = mid + 1;
//   let k = 0;

//   // While both sub-arrays have values, then try and merge them together in sorted order
//   while (i <= mid && j <= end) {
//     if (data[i] <= data[j]) {
//       tempArr[k++] = data[i++];
//     } else {
//       tempArr[k++] = data[j++];
//     }
//   }

//   // Add the rest of the values from the left sub-array into the result
//   while (i <= mid) {
//     tempArr[k] = data[i];
//     k++;
//     i++;
//   }

//   // Add the rest of the values from the right sub-array into the result
//   while (j <= end) {
//     tempArr[k] = data[j];
//     k++;
//     j++;
//   }

//   for (i = start; i < end; i++) {
//     data[i] = tempArr[i - start];
//   }
// }

// console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1], start, end));