function nonDecreasingSubset(arr) {
    
        let max = arr[0];
        let result = arr.filter(el => {
            if (el >= max) {
                max = el;
            }
            return el >= max;
        });
        console.log(result.join(' '));
    }
nonDecreasingSubset([20, 15, 5, 8, 9, 11, 1, 7]);
