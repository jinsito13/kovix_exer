

function consecCharRemove(text, limit) {
  let count = 0;
  let result = "";

  for (let i = 0; i < text.length; i++) {

    let currChar = text[i]

    if (result.endsWith(currChar)) {
      if (count>=limit) {
        continue;
      }

      count++
      result += currChar
    }
    else {
      count=1
      result = result + currChar
    }
  }
  console.log(result)
}
consecCharRemove("HHHHHola", 3);
consecCharRemove("AAAABBB", 1);
consecCharRemove("AAAABB", 3);
consecCharRemove("AAAABBAAA", 3);