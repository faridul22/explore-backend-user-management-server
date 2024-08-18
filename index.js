const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('user management server is Running')
})

app.listen(port, () => {
    console.log(`user management server is running on port ${port}`)
})