let userName = prompt("Who's there");
if (userName) {
  if (userName == "Admin") {
    let adminPassword = prompt("Enter password");
    if (adminPassword) {
      if (adminPassword == "TheMaster") {
        alert("Welcome!");
      }
      else {
        alert("Wrong password");
      }
    }
    else {
      alert("Canceled.");
    }
  }
  else {
    alert("I don't know you");
  }
}
else {
  alert("Canceled.");
}
