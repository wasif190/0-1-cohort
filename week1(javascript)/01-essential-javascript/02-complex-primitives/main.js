// WAP prints all the even numbers in an array 
const getEven = (arr) => {
    for (let num of arr) {
        if (num % 2 === 0) {
            console.log(num)
        }
    }
}
getEven([1, 2, 3, 4, 5])


// WAP to print the biggest number in an arrya 
const getBiggestNum = (arr) => {
    let num;
    // for (let i = 1; i < arr.length; i++) {
    //     num = arr[i];
    // }
    for (let n of arr) num = n;
    
    console.log(`The biggest number is ${num}`)
}
getBiggestNum([1, 2, 3, 5, 9])


// WAP that prints all the male people’s ﬁrst name given a complex object 
const people = [
    {
        name: "Tony stark",
        gender: "Male"
    },
    {
        name: "Frieday the AI",
        gender: "Female"
    },
    {
        name: "Jarvis the AI",
        gender: "Male"
    }
];

const getFirstName = (arr) => {
    arr.forEach((person) => {
        if (person.gender.toLowerCase() === "male") {
            console.log(person.name)
        }
    })
}
getFirstName(people)


// Write a program that reverses all the elements of an array
const reverseEl = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i])
    }
}
reverseEl([1, 2, 3, 4])