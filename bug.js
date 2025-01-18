function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause error
  }
  return a + b;
}
console.log(foo(1, null));