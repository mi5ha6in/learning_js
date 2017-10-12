let x = +prompt("Enter the number", "");
let n = +prompt("Enter the power of number", "");
alert(pow(x,n));
function pow(x,n) {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}
