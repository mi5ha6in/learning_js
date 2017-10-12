var a = +prompt("a", "");
var b = +prompt("b", "");
alert(min(a,b))
function min(a,b) {
  if (a < b) {
    return a;
  }
  else {
    return b;
  }
}
