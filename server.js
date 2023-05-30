const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./routes')
const port = process.env.PORT || 5000
const host = '0.0.0.0'
const cors = require("cors");

var corsOptions = {
  origin: "http://ferryibnu0802.ap-southeast-1.elasticbeanstalk.com"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get('/', (request, response) => {
  response.json({ info: 'Ferry Ibnu Node.js, Express, and Postgres API' })
})

app.get('/Mahasiswa', db.getMahasiswa)
app.get('/Mahasiswa/:id', db.getMahasiswaById)
app.post('/Mahasiswa', db.createMahasiswa)
app.put('/Mahasiswa/:id', db.updateMahasiswa)
app.delete('/Mahasiswa/:id', db.deleteMahasiswa)

app.listen(port, () => {
  console.log(`App running on http://${host}:${port}.`)
})