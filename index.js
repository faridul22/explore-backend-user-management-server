const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const user = [
    { name: "Farid", age: 25 },
    { name: "jalal", age: 52 },
    { name: "kamal", age: 45 },
    { name: "salam", age: 53 },
]

app.get('/', (req, res) => {
    res.send('user management server is Running')
})

app.get('/user', (req, res) => {
    res.send(user)
})

app.listen(port, () => {
    console.log(`user management server is running on port ${port}`)
})