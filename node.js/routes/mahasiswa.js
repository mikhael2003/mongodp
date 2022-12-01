const express = require('express')
const router = express.Router()
const Mahasiswa = require('../model/Mahasiswa')

router.post('/', async(req, res) => {
    const mahasiswaport = new Mahasiswa({
        nama: req.body.nama, 
        alamat: req.body.alamat
    })



    
} )