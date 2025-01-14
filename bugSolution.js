function foo(a, b) {
  if (a === null || b === null || a === undefined || b === undefined) {
    return null;
  }
  // ...rest of the function
}

//Alternative solution
function foo(a, b) {
  if (!a || !b) {
    return null;
  }
  // ...rest of the function
} 