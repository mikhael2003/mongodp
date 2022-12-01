const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')



//koneksi ke mongodp
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true})
let db = mongoose.connection

//jika error 
db.host('error', console.error.bind(console, 'Error establishing a database connection'));
//jika sukses
db.once('open', () => {console.log('Database is connected');
})


// listen portS
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
    console.log(`Server running on ${process.env.PORT}`);
})