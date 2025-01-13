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

// TODO: How are we going to push the numbers bigger than 2 to the array. This won't cut it due to how the Fibonacci sequence works.
function fibsRec(n) {
  let arr = [];

  if (n < 2) {
    arr.push(n);
  } else {
    n = fibsRec(n - 1) + fibsRec(n - 2);
    arr.push(n);

    // let fib = arr[fibsRec(n - 1)] + arr[fibsRec(n - 2)];
    // arr.push(fib);
  }  

  return arr;
}

console.log(fibsRec(8));