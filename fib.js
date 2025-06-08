function fibanocci(n) {
    let res = [];
    let pointer1 = 0;
    let pointer2 = 1;
    for (var i = 0; i < n; i++) {
        if (res.length < 2) {
            res.push(i);
        }
        else {
            res.push(res[pointer1] + res[pointer2]);
            pointer1++;
            pointer2++;
        }
    }
    return res;
}


function fibRecursion(n, res = [0, 1]) {
    if (res.length >= n) {
        return res.slice(0, n);
    }
    res.push(res[res.length - 1] + res[res.length - 2])
    return fibRecursion(n, res)
}


console.log(fibanocci(8));
console.log(fibRecursion(8));