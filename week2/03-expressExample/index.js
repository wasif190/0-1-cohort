const express = require('express');
const app = express();

const PORT = 3000;

const sum = (n) => {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

app.get('/', (req, res) => {
    const n = req.query.n;
    const ans = sum(n);
    res.send(`The sum is ${ans}`)
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
