function multiplicationTable() {
  let input = document.getElementById("input").value;

  for (let i = 0; i <= 9; i++) {
    i++;

    let result = input * i;
    document.getElementById(
      "output"
    ).innerHTML += `${input} * ${i} = ${result} <br>`;
    i--;
  }
}
