function findOdd(arr) {
    //happy coding!
    const array = arr.reduce((acc, elt) => {
        acc[elt] = 1 + acc[elt] || 1;
        return acc
    }, {});
    return Number(Object.keys(array).filter((elt) => array[elt] % 2))
}

console.log(findOdd([
    20,
    1,
    1,
    2,
    2,
    3,
    3,
    5,
    5,
    4,
    20,
    4,
    5
]));
