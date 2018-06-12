function solve(string) {
    const jambon = [...string].filter(elt => elt !== "(" && elt !== ")");
    const saucisse = jambon.map((elt, i) => Number(elt)
        ? i
        : null).filter(elt => elt !== null)
    const patanegra = jambon.filter((elt, i, arr) => !parseInt(elt)).slice()

    console.log(patanegra);
    console.log(saucisse);
    function test(array, index) {
        jambon.filter((elt, i, arr) => !parseInt(elt)).slice(index[1])
    }

}

console.log(solve("3(aa3(b))"));