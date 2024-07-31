/*
function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i;
    }
    return ans
}

function findSumTill100() {
    console.log(findSum(100))
}

setTimeout(findSumTill100, 1000)
console.log("Hello JS")
*/


// Common async funtions: setTimeout, fs.readFile, Fetch

// Function returning a Promise
console.log("Starting")

function doTask() {
    return new Promise((resolve, reject) => {
        let success = true;
        setTimeout(() => {
            if (success) {
                resolve("Task completed successfully");
            } else {
                reject("Task failed");
            }
        }, 2000);
    });
}

// Using async/await
async function executeTask() {
    try {
        let result = await doTask();
        console.log("Starting result!!")
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

executeTask();

console.log("Ending")