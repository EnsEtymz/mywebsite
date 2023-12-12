const express = require('express');
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const MessageSchema = require('./model/Message')
const IP_ADDRESS = '0.0.0.0'; 
require('dotenv').config()


mongoose.connect(process.env.DB_URL)
  .then(() => console.log('Connected!'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.render('index.ejs')
})
app.get('/msg', async(req,res)=>{
   const data = await MessageSchema.find()
    res.render('messages.ejs',{data})
})

app.post('/contact', (req,res)=>{
    const {name,email,message} = req.body
MessageSchema.create({
name,
email,
message
}).then(()=>{
    res.redirect('/')
})
})

app.listen(3000,IP_ADDRESS, ()=>{
console.log('çalıştı')
})