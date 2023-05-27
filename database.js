const {Client} = require("pg")

const client = new Client({
    host: "ferryibnu0802.cpp4990v3hij.ap-southeast-1.rds.amazonaws.com",
    user: "ferryibnu0802",
    port: 5432,
    password: "12345678",
    database: "initial_db"
});

client.connect();
module.exports = client;


// client.query('SELECT * FROM Customers', (err, res)=>{
//     if(!err) {
//         console.log(res.rows);
//     } else {
//         console.log(arr.message);
//     }
//     client.end;
// })

// const Pg = require("pg");
// // buat konfigurasi koneksi
// const koneksi = new Pg({
//     host: "ferryibnu0802.cpp4990v3hij.ap-southeast-1.rds.amazonaws.com",
//     user: "ferryibnu0802",
//     port: 5432,
//     password: "12345678",
//     database: "initial_db"
// });
// // koneksi database
// koneksi.connect((err) => {
//     if (err) throw err;
//     console.log('PostgreSQL Connected...');
// });
// module.exports = koneksi;