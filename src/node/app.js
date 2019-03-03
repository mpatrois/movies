const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const router = require('./routes');


app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use('/', router);
app.use('/dist', express.static(__dirname + './../dist'))
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))