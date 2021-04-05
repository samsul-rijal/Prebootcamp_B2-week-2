function vowelsCheck() {
  let input = document.getElementById("input").value;

  if (
    input == "a" ||
    input == "e" ||
    input == "i" ||
    input == "o" ||
    input == "u"
  ) {
    document.getElementById("output").innerHTML = `${input} adalah huruf vokal`;
  } else if (
    input == "A" ||
    input == "E" ||
    input == "I" ||
    input == "O" ||
    input == "U"
  ) {
    document.getElementById("output").innerHTML = `${input} adalah huruf vokal`;
  } else {
    document.getElementById(
      "output"
    ).innerHTML = `${input} adalah bukan huruf vokal`;
  }
}
