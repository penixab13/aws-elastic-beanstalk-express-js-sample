const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hasnae is my name and my last name is Abouchouar'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
