const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors())

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

app.listen(port, () => {
    console.log(`User Management server in running on port:${port}`)
})