let enteredNumber = prompt("Enter the number", "");
if (enteredNumber == 0) {
  alert(`The number ${enteredNumber} equals 0`);
}
else if (enteredNumber > 0) {
  alert(`The number ${enteredNumber} is greater zero`);
}
else {
  alert(`The number ${enteredNumber} is less than zero`);
}
