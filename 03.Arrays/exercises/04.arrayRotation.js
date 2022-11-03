function arrayRotation(arr, rotation) {
    for (let index = 0; index < rotation; index++) {
        let firstElement = arr[0];

        for (let m = 0; m < arr.length; m++) {
            arr[m] = arr[m + 1];

        }
        arr[arr.length - 1] = firstElement;

    }
    console.log(arr.join(" "));
}
arrayRotation([51, 47, 32, 61, 21], 2,);
