function arrayRotation(arr, rotation) {

    for (let i = 0; i < rotation; i++) {
        let currentElement = arr.shift()
        arr.push(currentElement)

    }
    console.log(arr.join(' '));
}
arrayRotation([2, 4, 15, 31], 5)