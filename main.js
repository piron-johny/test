// const findUniq = (numbers) => {
//   const sortNumbers = [...numbers].sort((a, b) => a - b);
//   if (sortNumbers[0] === sortNumbers[1]) {return sortNumbers[sortNumbers.length - 1]}
//   if (sortNumbers[0] < sortNumbers[sortNumbers.length - 1]) {return sortNumbers[0]}
// };

// console.log(findUniq([1, 1, 1, 2, 1, 1]));
// console.log(findUniq([0, 0, 0.55, 0, 0]));
// console.log(findUniq([5, 5, 8, 5, 5, 5, 5]));
// findUniq([1, 1, 1, 2, 1, 1]) === 2
// findUniq([0, 0, 0.55, 0, 0]) === 0.55
// findUniq([5, 5, 8, 5, 5, 5, 5] === 8

//----------------------------------------------------------------------------------------

// ----- Удаляет гласные буквы из строки

// function disemvowel(str) {
//   const vowelsLetter = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//   const arrayWithouVowel = str.split('')
//   // console.log(arrayWithouVowel);

//   arrayWithouVowel.forEach((el, ind) => {
//     for (i = 0; i < vowelsLetter.length; i += 1) {
//       if (el === vowelsLetter[i]) {
//         arrayWithouVowel.splice(ind, 1)
//       }
//     }
//   });

//   return console.log(arrayWithouVowel.join(''))
// }

// ---- мультипликативная персистентность

// function persistence(num) {
//   let count = -1;

//   function multiplication(arry) {
//     const arrayOfNum = String(arry).split("");
//     console.log('arrayOfNum', arrayOfNum);
//     count += 1;
//     let nextSum = arrayOfNum.reduce((acc, el) => acc *= el);
//     if (arrayOfNum.length !== 1) {
//       multiplication(nextSum);
//     }
//     return count;
//   }

//   return multiplication(num)
// }

// console.log(persistence(999));

