// Let's do practice //

// WAP to greet a person given their ﬁrst and last name
const greet = (firstName, lastName) => {
    console.log(`Hello ${firstName} ${lastName}`)
}
greet("iron", "man")


// WAP that greets a person based on their gender. (If else) 
const greet2 = (name, gender) => {
    if (gender.toLowerCase() === "male") {
        console.log(`Hello ${name}, man are brave!!`);
    } else {
        console.log(`Hello ${name}, women are warriors`)
    }
}
greet2("Tony", "male")


// WAP that counts from 0 - 1000 and prints (for loop)
const msg = (count) => {
    for (let i = 1; i <= count; i++) {
        console.log(`Iron armor ${i}`)
    }
}
msg(100);