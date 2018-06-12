
// Ecrire une fonction qui dit si tous les caractères d'une chaine soient présents dans une autre chaine tel que:

// crypto("mdp", "AZR4T4J8K64È-È4d4**6P\TYR56z4J6fUM-YT4Èh6#84U@JGFHg6K6ÇÇHDG&468g9JF46GJH") => true

// crypto("pass", "G65Fd465aFSPG4FD6G4DFSG6cFDHG-D4SH64FDv64GEH64g3DF5freAG44FGF6-zDHG4FmDg4HGD") => true

// crypto("no", "a4Z566ER4_n5T154Y") => false
//DojoOne

// function test(value, compare) {
//     let count = 0;
//     [...compare.toLowerCase()].map(letter => value[count] === letter ? count += 1 : false)
//     return count
// }

// console.log(test("pass", "G65Fd465aFSPG4FD6G4DFSG6cFDHG-D4SH64FDv64GEH64g3DF5freAG44FGF6-zDHG4FmDg4HGD"))

//DojoTwo

function kdigits(n, k) {
    let array = ([...new Set([...n.toString()])].filter(x => x > 0).slice(0, [...new Set([...n.toString()])] - k)).slice(0, k)

    if (k === array.length) {
        throw new Error("Aucun K détécté dans le code bootstrap !", "aaaaaaaaa")
    } else if (k > array.length) {
        throw new Error("Attention nombre plus grand que bootstrap !", "aaaaaaaaaaaaaaaaa")
    }

    return array
}
try {
    kdigits(47454444, 12)
}
catch (e) {
    console.log(e)

}

console.log(kdigits(47454444, 2))