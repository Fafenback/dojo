function moveZeros(arr) {
    let zero = arr.filter(elt => elt === 0);
    const filtered= arr.filter(elt => typeof elt !== "boolean" && elt !== 0)
    return [...filtered,...zero]
}


console.log(moveZeros([false,1,0,1,2,0,1,true,0,3,"a"]))