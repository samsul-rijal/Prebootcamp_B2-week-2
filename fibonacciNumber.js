function fibonacciNumber() {
  let input = document.getElementById("input").value;

  let number1 = 0;
  let number2 = 1;

  document.getElementById("output").innerHTML += `${number1} ${number2} `;

  for (let i = 2; i < input; i++) {
    let result = number1 + number2;
    document.getElementById("output").innerHTML += `${result} `;
    number1 = number2;
    number2 = result;
  }
}
