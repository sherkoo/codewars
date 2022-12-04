function longestRepetition(s) {
  // init count
  let count = 0;

  // init character
  let c = "";
  let arr = [];

  // convert to lowercase
  let lower = s.toLowerCase();

  // check if param s exists
  if (s.length > 0) {
    // loop thru param s
    for (let i = 0; i < lower.length; i++) {
      arr.push(lower[i]);

      // check next character, if so add to count
      if (arr[i] == i) {
        console.log("yes");
      }
    }

    // return
    console.log(arr);
    return [c, count];
  } else {
    return 0;
  }
}

console.log(longestRepetition("aAaabb"));
