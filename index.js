const express = require('express');

const app = express();

app.use('/', (req, res) =>{
    res.send('¡Works!');
})

app.listen(5000);