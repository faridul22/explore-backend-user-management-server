const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json())

const users = [
    { id: 1, name: "Farid", category: "job" },
    { id: 2, name: "Santa", category: "housewife" },
    { id: 3, name: "Rafat", category: "student" },
    { id: 4, name: "Fatiha", category: "student" },
    { id: 5, name: "Enjamam", category: "normal" },
]

app.get('/', (req, res) => {
    res.send("User management server is running")
});

app.get("/users", (req, res) => {
    res.send(users)
})

app.post('/users', (req, res) => {
    console.log("hitting post api")
    console.log(req.body)
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
})
// add new comment for checked file
app.listen(port, () => {
    console.log(`User Management server in running on port:${port}`)
})