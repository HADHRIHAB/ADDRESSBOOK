const express=require('express');

const router= express.Router();

const Contact= require('../models/contact');


const multer= require('multer');
filename='';

const myStorage = multer.diskStorage({
    destination:'./upload', 
    filename: (req,file,redirect)=>{
     
        filename= Date.now()+ '.'+file.mimetype.split('/')[1];

        redirect(null, filename);
    }
})


const upload = multer({storage:myStorage});




router.post('/add', upload.any('image'), (req , res)=>{
   let data= req.body;
   contact= new Contact(data);
   contact.image= filename;
   contact.save()

   .then(
    (Result)=>{
        filename='';
        res.send(Result)
    }
   )
   .catch(
    (err)=>{
        res.send(err)
    })

})

router.get('/getbyiduser/:idUser' , (req, res)=>{

    let myIdUser= req.params.idUser;
    Contact.find({idUser: myIdUser })

    .then(
        (Result)=>{
            res.send(Result)
        }
       )
       .catch(
        (err)=>{
            res.send(err)
        })
})
router.get('/getbyid/:id' , (req, res)=>{

    let id= req.params.id;
    Contact.findById({_id: id })

    .then(
        (Result)=>{
            res.send(Result)
        }
       )
       .catch(
        (err)=>{
            res.send(err)
        })
})

router.delete('/delete/:id' , (req, res)=>{

let myId= req.params.id;
Contact.findByIdAndRemove({_id:myId})

    .then(
        (Result)=>{
            res.send(Result)
        }
       )
       .catch(
        (err)=>{
            res.send(err)
        }
       )
})
router.put('/update/:id' , (req, res)=>{
    let myId= req.params.id;
    let data = req.body;
    Contact.findOneAndUpdate( {_id: myId},data )
    
    .then(
        (Result)=>{
            res.send(Result)
        }
       )
       .catch(
        (err)=>{
            res.send(err)
        })
})






module.exports=router;