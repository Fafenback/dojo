function test(n) {
    return [...new Set([...n])]
}

console.log(test([
    1,
    1,
    1,
    1,
    5,
    6
]));