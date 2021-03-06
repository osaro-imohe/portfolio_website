const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
var path = require('path');
const wakeUpDyno = require('./wakeUpDyno');

app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => res.sendFile(__dirname + '/html/index.html'))
app.get('*', (req, res) => res.status(404).sendFile(__dirname + '/html/404.html'));

app.listen(port, () => {
    wakeUpDyno('https://osarospersonalwebsite.herokuapp.com/');
    console.log(`Example app listening at http://localhost:${port}`)
})