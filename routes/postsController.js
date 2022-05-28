const express = require('express')
const router = express.Router()
const ObjectId = require('mongoose').Types.ObjectId

const  { PostsModel } = require('../models/postsModel')

router.get('/', (req , res)=>{ // "/" à partir de /posts du get dans le fichier index, c'est a dire que l'on rajoute pas de lien en plus
  PostsModel.find((err, docs) => {
    if(!err) res.send(docs) 
    else console.log("Error loes de recuperation des posts",err)
  })
})

router.post('/', (req, res) => {  // pour creer avec save
  const newRecord = new PostsModel({
    author: req.body.author,
    message: req.body.message
  })

  newRecord.save((err, docs)=>{
    if(!err) res.send(docs)
    else console.log('error creating new Data :' , err)
  })
})

router.put('/:id' , (req , res) => { // pour les update
  if( !ObjectId.isValid(req.params.id) ) return res.status(400).send( "ID unknown :" + req.params.id)
  
  const updateRecord = {
    author: req.body.author,
    message: req.body.message
  };

  PostsModel.findByIdAndUpdate( req.params.id , { $set : updateRecord} , {new : true}, (err,docs) => {
    if(!err) res.send(docs)
    else console.log('Update Error :' ,err)
  })
})

router.delete('/:id' , (req , res) => { // pour deletes des potst
  if( !ObjectId.isValid(req.params.id) ) return res.status(400).send( "ID unknown :" + req.params.id)

  PostsModel.findByIdAndDelete( req.params.id, (err , docs) => {
    if (!err) res.send(docs)
    else console.log('Delete Post error:', err)
  } )
})

module.exports = router