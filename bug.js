function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will return null even if the parameters are undefined
  }
  // ...rest of the function
}