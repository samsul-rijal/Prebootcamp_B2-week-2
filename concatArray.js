// function concatArray() {
//   let arr1 = document.getElementById("input1").value;
//   let arr2 = document.getElementById("input2").value;
//   let arr3 = arr1.concat(arr2);

//   let result = [];
//   for (let i = 0; i < arr3.length; i++) {
//     if (result.indexOf(arr3[i]) === -1) {
//       result.push(arr3[i]);
//     }
//   }
//   document.getElementById("output").innerHTML = result;
// }

function concatArray() {
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let newArray = input1.concat(input2);

  function duplicateArray(num) {
    let arr = [];
    let obj = {};

    for (i = 0; i < num.length; i++) {
      obj[num[i]] = 0;
    }
    for (i in obj) {
      arr.push(i);
    }
    return arr;
  }

  result = duplicateArray(newArray);
  document.getElementById("output").innerHTML = `Output : ${result}`;
}
