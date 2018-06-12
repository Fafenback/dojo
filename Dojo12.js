function accum(str) {
    return [...str.toUpperCase()].filter(letter => (/[A-Z]/i).test(letter)).map((letter, index) => letter + letter.repeat(index).toLowerCase()).join("-")
}

console.log(accum("ab2cdadfhfgsqsvfekkjkjkjkihouhunh,xg,vd,hg,nvdv,ngntrkno@@"))