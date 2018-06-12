function test(str) {

    return [
        ...str
            .split(" ")
            .join("")
            .toLowerCase()
    ].sort((a, b) => a > b)
}

console.log(test('AY'));