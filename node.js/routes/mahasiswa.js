const express = require('express')
const router = express.Router()
const Mahasiswa = require('../model/Mahasiswa')

router.post('/', async(req, res) => {
    const mahasiswaport = new Mahasiswa({
        nama: req.body.nama, 
        alamat: req.body.alamat
    })
})

// Update (method PUT)
router.put('/:mahasiswaId', async(req,res) => {
    //taqmpang data yang mau diubah
    const data = {
        nama: req, body,nama,
        alamat: req,body,alaamat
    }

    try {
        //update data disini
        const mahasiswa = awaitMahasiswa.UpdateOne({
            _id: req.params.mahasiswaId
        }, data)
        //response sucsess
        res.json(mahasiswa)
       } catch (error) {
           res.json({message: error})
       }
})