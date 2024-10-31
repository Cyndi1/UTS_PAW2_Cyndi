const mongoose = require ('mongoose');

const pariwisataSchema = new mongoose.Schema(
    {
        kota_pariwisata : {
            type : String,
            require : true
        },
        objek_wisata : {
            type : String,
            require : true
        },
        jam_buka_tutup : {
            type : String,
            require : true
        }
    }
)

module.exports = mongoose.model('Pariwisata', pariwisataSchema);