require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.json({ value: process.env.MESSAGE })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

    console.log("Ready", process.env.MESSAGE);
})
