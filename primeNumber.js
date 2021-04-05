function printPrime() {
  let firstNumber = document.getElementById("firstNumber").value;
  let lastNumber = document.getElementById("lastNumber").value;

  for (let i = firstNumber; i <= lastNumber; i++) {
    let prime = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        prime++;
      }
    }

    if (prime == 2) {
      document.getElementById("result").innerHTML += `${i} `;
    }
  }
  document.getElementById(
    "output"
  ).innerHTML = `Ouput: Bilangan prima antara ${firstNumber} sampai ${lastNumber} adalah`;
}
