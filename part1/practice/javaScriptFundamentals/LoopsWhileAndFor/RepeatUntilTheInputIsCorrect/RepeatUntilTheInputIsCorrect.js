let number = +prompt("Enter number greater than 100");
if (number <= 100) {
  while(number <= 100 && number) {
    number = +prompt("Wrong, enter number greater than 100 again");
  }
}
else {
  alert("Nuts");
}
