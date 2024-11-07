const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('hello,jenkins and ansible!');
})

module.exports = app;