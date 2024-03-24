//const express = require('express') // giong import
//const path = require('path')
import express from 'express';
import configViewEngine from './configs/viewEngine';
require('dotenv').config();

const app = express() // tao class --tao ham -goi ham 
const port = process.env.PORT || 8081;
console.log('>>>check port: ', port);

configViewEngine(app);
app.get('/', (req, res) => {
  res.render('test/index.ejs')
})

app.get('/', (req, res) => {
  res.send('Hello World! & Le Ngoc Vuong')
})

app.get('/about', (req, res) => {
  res.send('I am Le Ngoc Vuong')
})

app.listen(port, () => { // noi cho express bt chay tren cong nao
  console.log(`Example app listening on port ${port}`)
})