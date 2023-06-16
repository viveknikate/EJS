const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const ejs = require('ejs')

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get('/',(req, res)=>{
     setTimeout(() => {
          res.render('index')
     }, 1000);
})

app.get('/about',(req, res)=>{
     setTimeout(() => {
          res.render('about')
     }, 1000);
})

app.get('/contact',(req, res)=>{
     setTimeout(() => {
          res.render('contact')
     }, 1000);
})

app.post('/contact',(req, res)=>{
     const name = req.body.fname;
     setTimeout(() => {
          res.render('success',{personName:name});
     }, 1000);
})

app.get('/blogs',(req,res)=>{
     setTimeout(() => {
          res.render('blog')
     }, 1000);
})

app.listen(3000,()=>{
     console.log("server is running on port 3000");
})