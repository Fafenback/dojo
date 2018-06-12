function test(arr) {
    const object = arr.reduceRight((acc, elt) => {
        acc[elt] = 1 + acc[elt] || 1;
        return acc
    }, {})
    const indexMax = Math.max(...Object.values(object))
    const findRealMax = Object
        .values(object)
        .map((elt, i) => elt === indexMax
            ? i
            : null)
    const index = Math.max(...findRealMax)
    return Number(Object.keys(object)[index])
}

test([
    12,
    10,
    8,
    12,
    7,
    6,
    4,
    10,
    12,
    10
])

function freddy(str) {
    const index = [...str].map((elt, i) => elt === "a"
        ? i
        : null);
    return str
}

console.log(freddy("The quick brown fox jumps over the lazy dog."));