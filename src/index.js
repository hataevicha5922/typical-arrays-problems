exports.min = function min(array) {
    let res = 0;
    if (arguments.length !== 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] < res) {
                res = array[i];
            }
        }
    } else {
        res = 0;
    }
    return res;
};

exports.max = function max(array) {
    let res = 0;
    if (arguments.length !== 0) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > res) {
                res = array[i];
            }
        }
    } else {
        res = 0;
    }
    return res;
};

exports.avg = function avg(array) {
    let sum = 0;
    let res = 0;
    if (arguments.length !== 0) {
        for (let i = 0; i < array.length; i++) {
            sum = sum + array[i];
            res = sum / array.length;
        }
    } else {
        res = 0;
    }

    return res;
};
