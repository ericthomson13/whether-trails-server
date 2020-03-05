const express = require('express');
const bp = require('body-parser');

const keys = require('../keys');
const port = 3000;

const app = express();

app.use(bp.json());

app.get('/weather', (req, res) => {

});

app.get('/trails/:type', (req, res) => {

});

app.listen(port, () => console.log(`Server is listening on ${port}`));