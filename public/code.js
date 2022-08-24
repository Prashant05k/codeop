// let s = "abcabcbbac";
// //'abc' 3

// let str = "";
// let newStr = "";

// for (let i of s) {
// //   console.log(newStr, str);
//   if (str.includes(i)) {
//     str = "";
//   }
//   str += i;
//   if (str.length > newStr.length) {
//     newStr = str;
//     //   console.log(newStr);
//   }
// }
// console.log(newStr);

// let k = 0;
// while (k < 5) {
//   if (k === 3) {
//     k++;
//     continue;
//   }
//   console.log(k);
//   k++;
// }

let array = [3, 2, 10, 8, 6, 1, 8];
let i = 0;
let j = 1;
function isArraySorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
function sortArray(arr) {
  if (isArraySorted(arr)) {
    console.log(arr);
    return;
  } else {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i = 0;
      j = 1;
    } else {
      i++;
      j++;
    }
    sortArray(arr);
  }
}
sortArray(array);
// console.log(array);
