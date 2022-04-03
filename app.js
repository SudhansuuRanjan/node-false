const PORT = 8080
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile(__dirname+'/index.html');
})

app.get('/server', function (req, res) {
    res.sendFile(__dirname+'/index.html');
})

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))
