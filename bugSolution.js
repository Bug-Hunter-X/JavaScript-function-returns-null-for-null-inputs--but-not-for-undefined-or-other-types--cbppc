function foo(a, b) {
  // Check for null or undefined inputs
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; // Or throw an error: throw new Error('Inputs cannot be null or undefined');
  }

  // Check if inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0; // Or throw an error: throw new Error('Inputs must be numbers'); 
  }

  return a + b;
}
console.log(foo(1, null)); //Output: 0
console.log(foo(1, 2)); //Output: 3
console.log(foo(1, '2')); //Output: 0
console.log(foo(undefined, 2)); //Output: 0