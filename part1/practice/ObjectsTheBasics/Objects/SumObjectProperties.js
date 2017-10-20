let salaries = {
  Jonn: 100,
  Ann: 160,
  Pete: 130,
}
let sum = 0;
for (let salarie in salaries) {
  sum += salaries[salarie];
}
alert(sum);
