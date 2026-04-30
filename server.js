// All the Comments in this code is written by me for my own understanding and not AI Generated!

const express = require("express");

const app = express();
// express() creates a express application (my server), and here now app holds my server.

app.use(express.json());
// app.use() uses any functionality you give in it, here express.json() reads any incomming req that has JSON data and converts into usable object.

app.get("/", (req, res) => {
    res.send("API is working");
});
// app.get() look for the GET request on the Route "/", if someone does the callback function checks for what they requested in req and res is the object we use to send something back to the client.
// res.send() here we just send a normal text.

app.listen(3000, () => {
    console.log("server is running on port 3000");    
});
// app.listen() here it listens on port 3000 and () => {} callback function that runs after the server started and does what's inside it, here just prints the message to console.



let users = [
    {id: 1, name:"avinash"},
    {id: 2, name:"jawbreaker"}
];
// simulating Database using array.

app.get("/users", (req, res) => {
    res.status(200).json(users);
});
// if server gets a GET request for path /users we responds with status code 200 (it availabe), and also responds with the whole users data from the array here.

app.get("/users/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if(!user) return res.status(404).json({message: "User not found"});

    res.status(200).json(user);
});
// : tells that in the place of the "id" there will user controlled parameter.
// req.params is an object that contains all route parameters. req.params.id has specific route parameter and holds the value as string.
// user.find() is just a array method.
// if id doesn't matches the id in array, response with 404 and "user not found", if found then just return status 200 and the user with id specified.

app.post("/users", (req, res) => {
    const { name } = req.body;

    if (!name) res.status(400).json({message: "Name is Required"});

    const newUser = {
        id: users.length + 1,
        name
    };
    users.push(newUser);

    res.status(201).json(newUser)
});
// {users} will only save the name from the entire req.body.
// Creates a new user object with id and name that was in the req body. then added it to the existing array.