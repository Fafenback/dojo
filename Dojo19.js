function recursive(number) {
    if ([...number.toString()].length > 1) {
        let arr = number
            .toString()
            .split("")
        let final = arr.reduce((acc, elt) => acc + Number(elt), 0);
        return recursive(final)
    }
    return number

}
recursive(132189);

function comparePower(...arr) {
    let result = arr.map(elt => Math.pow(elt[0], elt[1]))
    if (result[0] > result[1]) {
        return 1
    } else if (result[1] > result[0]) {
        return -1
    }
    return 0
}

comparePower([
    3, 9
], [5, 6]); //1

function comparePower2(...arr) {
    return arr.reduce((acc, elt) => {
        acc - Math.pow(elt[0], elt[1])
        return Math.sign(acc) === 1
            ? 1
            : -1
    }, 0)
}

console.log(comparePower2([
    3, 9
], [5, 6]));