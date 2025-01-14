// #!/usr/bin/env node

function fibs(n) {
  let arr = [];
  
  for (let i = 0; i <= n; i++) {
    if (i < 2) {
      arr.push(i);
    } else {
      let fib = arr[i - 1] + arr[i - 2];
      arr.push(fib);
    }
  }

  return arr;
};

console.log(fibs(8));

// TODO: How are we going to push the numbers bigger than 'arr[1]' to the array? Previous 6 attempts didn't cut it due to how the Fibonacci sequence works.
// Do we need a "for...in" loop or "forEach" method here instead? Due to the way array indexes are added (above: "i" doesn't LITERALLY equal the number, it just equals the position in the array)

// I was missing several things: needed to return everything in every conditional after pushing them to the array, needed an 'else' statement that just returned the array[index] alone, needed to wrap all the conditionals inside a helper function then call the helper function inside the 'fibsRec' function before finally returning the full array. Was also missing the conditional 'arr.length <= i (NOT n)' because I always thought that 'arr.length' was always to the right of those expressions when I saw them used in loops elsewhere

// It still doesn't quite work right because it prints '1' as the first index before going through the rest of the Fibonacci sequence
function fibsRec(n) {
  // console.log("This was printed recursively");

  let arr = [];

  // This performs the actual recursion in order to dodge redundant calcs found in non-optimized Fibonacci code
  function recHelper(i) {
    // Base case #1
    if (i === 0) {
      arr.push(0);
      return 0;
    // Base case #2
    } else if (i === 1) {
      arr.push(1);
      return 1;
    // Recursive case that computes Fibonacci(i) if it hasn't been computed already
    } else if (arr.length <= i) {
      let fib = recHelper(i - 1) + recHelper(i - 2);
      arr.push(fib);
      return fib;
    } else {
      return arr[i]; // Use the cached result if possible
    }
  }

  recHelper(n); // Where you actually call the recursion with whatever value 'n' is
  return arr;
}

console.log(fibsRec(8));