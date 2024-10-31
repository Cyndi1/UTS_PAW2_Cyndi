const Pariwisata = require('../model/cyndi');

const cyndiCreate =(req,res) => {
    const pariwisata = new Pariwisata({
        kota_pariwisata : req.body.kota_pariwisata,
        objek_wisata : req.body.objek_wisata,
        jam_buka_tutup : req.body.jam_buka_tutup
    });
};

console.log(pariwisata);
pariwisata.save()
.then((cyndiCreated)=>{
    res.status(201).json({
        message : "Data Berhasil Disimpan",
        pariwisataId : cyndiCreated._id
    });
})
.catch((err)=>{
    res.status(500).json({
        message : "Internal server error",
    })
});

module.exports = {cyndiCreate};