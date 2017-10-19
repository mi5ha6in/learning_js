function isEmpty(obj) {
  let i = 0;
  for (key in obj) {
    i++
  }
  return i ? true : false;
}
