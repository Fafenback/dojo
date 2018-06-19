// const objet = {     python: 100,     rubis: 50,     php: 40 } function
// data(obj) {     const array = Object.entries(obj).filter(elt => elt[1] >= 60)
//     return array.length > 0 ? array.sort((a,b) => b[1] - a[1]).map(elt =>
// elt[0]): [] } const string = "abchzhzfzjsdufjsdfj" function pair(str) {
// let suite = str     if (str.length %  2 !== 0) {         suite = suite + "_"
//    }     return [...suite].map((elt,i, arr) => arr.slice(i,
// i+2).join("")).filter((elt,i) => i%2 === 0 ) }

function solve(string) {
    const jambon = [...string].filter(elt => elt !== "(" && elt !== ")");
    return jambon.map((elt, i) => Number(elt))
}

console.log(solve("3(a3(b))");