function removesArray() {
  const input = document.getElementById("input1").value;
  const remove = document.getElementById("input2").value;

  function removeItemFromArray(array, n) {
    const newArray = [];

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== n) {
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  const result = removeItemFromArray(input, remove);
  document.getElementById("output").innerHTML = `Output : ${result}`;
}
