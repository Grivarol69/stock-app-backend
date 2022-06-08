const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.get('/', (req, res) => {
    res.send('Stock App Running succesfully!');
});

const port = process.env.PORT | 8000;

app.listen(port, () => {
    console.log(`Express Server running at http://localhost:${port}`);
});