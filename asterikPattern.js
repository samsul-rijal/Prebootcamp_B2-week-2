function printPattern() {
  let input = document.getElementById("input").value;

  let result = "";
  for (i = 1; i <= input; i++) {
    for (j = 1; j <= i; j++) {
      result += "* ";
    }
    result += "<br>";
  }
  document.getElementById("output").innerHTML = result;
}
