const mongoose = require('mongoose');






mongoose.connect('mongodb://127.0.0.1:27017/addressBook')
    .then(()=>{
        console.log('connected')
    })

    .catch(()=>{
        console.log('error!!')
    })





module.exports = mongoose;
