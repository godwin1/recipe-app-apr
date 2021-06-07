const express = require('express')

const path = require('path')
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}))


const addProduct = router.use('/form',(req, resp, next) =>{
  resp.sendFile(path.join(__dirname, '..','public/htmls', 'form.html'));


});
const dbase = router.post('/message', (req, resp, next) =>{
  resp.send("<h1> thank you for reaching out</h1>")
   console.log(req.body)
});

const home = router.get('/', (req, resp, next) =>{
  // console.log(req.body)
  resp.send("<h1> USE IS HERE</h1>")
  });

module.exports = router;
