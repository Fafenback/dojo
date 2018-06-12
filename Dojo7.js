function verlan(str) {
  // let regexLetter = /[^aeuyio\s]{2,}/i;
  // let regexTest = /[^aeuyio\s]/i;
  // return str
  //   .split(" ")
  //   .map(
  //     mot =>
  //       mot.length > 5 && regexLetter.test(mot)
  //         ? regexTest.test(
  //             mot.slice(0, mot.length / 2)[mot.slice(0, mot.length / 2).length]
  //           ) && regexTest.test(mot.slice(mot.length / 2)[0])
  //           ? `${mot.slice(mot.length / 2)}${mot.slice(0, mot.length / 2)}`
  //           : `${mot.slice(mot.length / 2 - 1)}${mot.slice(
  //               0,
  //               mot.length / 2 - 1
  //             )}`
  //         : mot
  //   )
  //   .join(" ");
  return Math.ceil(str / 100);
}

// console.log(
//   verlan("Les maisons sont pres de la fontaine quartier jambon pauiee")
// );

console.log(verlan(1357));
