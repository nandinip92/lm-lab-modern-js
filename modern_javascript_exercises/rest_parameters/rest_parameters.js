// Instructions can be found in rest_parameters.md

// function add(a, b) {
//   // Add a loop here
//   return a + b;
// }

export function add(...num) {
  // Add a loop here
  //console.log(num);
  return num.reduce((acc, val) => acc + val);
}
add(1, 2);
add(1, 2, 3, 4, 5);

//module.exports = add;
