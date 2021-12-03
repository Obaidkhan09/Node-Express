const express = require ('express');
const path = require('path');
const app = express();

app.use (express.static('./public'));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(5000, () => {
    console.log('Listening at port 5000');
});