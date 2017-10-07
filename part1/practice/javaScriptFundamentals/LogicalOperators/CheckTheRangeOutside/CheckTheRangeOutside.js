let age = prompt("Enter age", "");
if (!(age >= 14 && age <= 90)) {
  alert(`The age ${age} years old isn't between 14 and 90`);
}
else {
  alert(`The age ${age} years old is between 14 and 90`);
}
