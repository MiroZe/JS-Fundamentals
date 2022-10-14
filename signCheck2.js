function signCheck(first, second, third) {

    function multiplyOfFirstTwo(a, b) {
        if (a * b > 0) {
            return 'positive';
        }
    }
    function number(c) {
        if (c > 0) {
            return 'positive';
        }
    }

    if (multiplyOfFirstTwo(first, second) === number(third)) {
        console.log('Positive');
    } else {
        console.log('Negative');
    }

}
signCheck(-5,
    1,
    1
)
