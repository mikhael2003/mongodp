const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')



//koneksi ke mongodp
mongoose.connect(process.env.DB_CONNECTION, {})

// listen portS
app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
    console.log(`Server running on ${process.env.PORT}`);
})