/* eslint-disable no-undef */
require('dotenv').config()
const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors())
app.use(express.json())
const port = 3000



app.listen(port, ()=>{console.log(`Listening port ${port}`)})

app.post('/login', (req, res) =>{
    const data = req.body
    
    
   
    const pass = data.password
    const user = data.username
    if(user == process.env.USER && pass == process.env.PASS){
        res.json(200)
    }
    else{
        res.json(403)
    }

})

app.post('/data', (req, res) =>{
    token = req.headers.authorization
    data = req.body
    code = data.code
    console.log(token, code)
    if(token == 'Bearer 123123' & code == 'jpwf' ){
        res.json(200)
    }
    else{
        res.json(403)
    }
})
