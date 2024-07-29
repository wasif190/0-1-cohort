// Write a function that ﬁnds the sum of two numbers 

const getSum = (x, y) => {
    return x + y;
}

const getFormat = (data) => {
    console.log(`The sum is ${data}`)
}

const printResult = (data) => {
    console.log(`The sum of two numbers is ${data}`)
}

const sum = getSum(4, 8);
getFormat(sum);
printResult(sum);


// Callbacks
const getSub = (x, y, fnToCall) => {
    let result = x - y;
    fnToCall(result);
}

const getSubResult = (data) => {
    console.log(`The sum is ${data}`)
}

getSub(6, 3, getSubResult)