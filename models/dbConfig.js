const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://Roxxstar:Ragnarok69@cluster0.0afonfd.mongodb.net/node-API',
  { useNewUrlParser : true , useUnifiedTopology: true },
  (err) => {
    if(!err) console.log('mongoDB connected')
    else console.log(" Connection error :", err)
  }
)