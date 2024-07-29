// FIRST WAY //

/*
const getArithmetic = (a, b, type) => {
    if (type === "add") {
        const sum = getSum(a, b)
        return sum;
    } 
    if (type === "minus") {
        const sub = getSub(a, b)
        return sub
    }
}

const getSum = (x, y) => {
    return x + y
}

const getSUb = (x, y) => {
    return x - y
}

const result = getArithmetic(4, 6, "add");
console.log(result)
*/




// SECOND WAY //
const getArithmetic = (a, b, arithmeticFn) => {
    const result = arithmeticFn(a, b);
    return result;
}

const sum = getArithmetic(4, 6, (x, y) => {
    return x + y;
});

const sub = getArithmetic(4, 6, (x, y) => {
    return x - y;
});

console.log(sum)
console.log(sub)


