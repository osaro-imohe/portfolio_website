const express = require('express')
const app = express()
const port = 8000
var path = require('path')

app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => res.sendFile(__dirname + '/html/index.html'))
app.get('*', (req, res) => res.status(404).sendFile(__dirname + '/html/404.html'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))