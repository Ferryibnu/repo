const Pool = require('pg').Pool
const pool = new Pool({
    host: "ferryibnu0802.cpp4990v3hij.ap-southeast-1.rds.amazonaws.com",
    user: "ferryibnu0802",
    port: 5432,
    password: "12345678",
    database: "initial_db"
})
const getMahasiswa = (request, response) => {
  pool.query('SELECT * FROM Mahasiswa ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getMahasiswaById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM Mahasiswa WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createMahasiswa = (request, response) => {
  const { nama, nrp } = request.body

  pool.query('INSERT INTO Mahasiswa (nama, nrp) VALUES ($1, $2)', [nama, nrp], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Mahasiswa added with ID: ${results.insertId}`)
  })
}

const updateMahasiswa = (request, response) => {
  const id = parseInt(request.params.id)
  const { nama, nrp } = request.body

  pool.query(
    'UPDATE Mahasiswa SET nama = $1, nrp = $2 WHERE id = $3',
    [nama, nrp, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Mahasiswa modified with ID: ${id}`)
    }
  )
}

const deleteMahasiswa = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM Mahasiswa WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Mahasiswa deleted with ID: ${id}`)
  })
}

module.exports = {
  getMahasiswa,
  getMahasiswaById,
  createMahasiswa,
  updateMahasiswa,
  deleteMahasiswa,
}