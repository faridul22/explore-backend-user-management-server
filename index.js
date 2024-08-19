const express = require('express');
const cors = require('cors');
const app = express();

// middleware
app.use(cors());
app.use(express.json())

const port = process.env.PORT || 5000;

const users = [
    { id: 1, email: "Farid", password: 25 },
    { id: 2, email: "jalal", password: 52 },
    { id: 3, email: "kamal", password: 45 },
    { id: 4, email: "salam", password: 53 },
]

app.get('/', (req, res) => {
    res.send('user management server is Running')
})

app.get('/users', (req, res) => {
    res.send(users)
})
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser)
})

app.listen(port, () => {
    console.log(`user management server is running on port ${port}`)
})