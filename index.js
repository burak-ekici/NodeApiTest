const express = require('express')
const app = express()
require('./models/dbConfig')
const postsRoutes = require('./routes/postsController')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors()) // permet de donner l'acces de l'API à tout le monde , on peux par exemple utiliser notre API via le site codepen
// app.use(cors({origin : 'http:localhost:3000'})) // permet de donner l'acces de l'API au parametre origin passé. ici seul le localhost:3000 peux envoyer les reqquetes

app.use(bodyParser.json())

app.use('/posts', postsRoutes) 

app.listen(5500 , () => console.log('ok'))