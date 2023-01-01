const mongoose = require('mongoose');

const Contact= mongoose.model('Contact',{
    name:String,
    lastname:String,
    email:String,
    address:String,
    tel:String,
    image:String,
    idUser:String,
    


});




module.exports= Contact;