// Create a todo app that lets user store todos on the server

// Step 1: getting all todos: GET
// Step 1: create the todo: POST
// Step 3: update the todo by its id: PUT
// Step 4: delete the todo by its id: DELETE

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let port = 3000;
let todos = [
    { id: 0, todo: "Write an express server" },
    { id: 1, todo: "Do some code" } 
];

app.get('/', (req, res) => {
    res.send('<h1>A mini todo application</h1>')
})

app.get('/todos', (req, res) => {
    res.json(todos)
});


app.post('/todos', (req, res) => {
    const {todo} = req.body;

    /*
    req.body: 
    - This is the object containing the data sent in the request body. 
    - it refers to the data you send in the body of an HTTP request when you make a POST, PUT, or PATCH request.
    - The body of the request is where you include data to be sent to the server.
    - For a JSON payload, it will look something like { "todo": "Sample todo" }.
    */

    if (!todo) res.status(400).json({error: "Text can't be empty!"});

    const newTodo = {
        id: todos.length,
        todo
    }

    todos.push(newTodo);
    
    res.status(200).json(newTodo)
});


/*
What is mean by - :id
This is a route parameter. It acts as a placeholder for dynamic values.
Dynamic values means the :id segment indicates that this part of the URL will be replaced 
with an actual ID value when a request is made. 
*/
/*
What is req.params
It allows you to capture values from the URL path, making it easy to handle dynamic routes.
*/



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});
