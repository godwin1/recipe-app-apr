const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express();
const router = express.Router();
router.use(bodyParser.urlencoded({extended: false}))
const shop = router.get('/shop', (req, resp, next)=>{
  resp.sendFile(path.join(__dirname, '..','public/htmls', 'shop.html'));
})
const contact = router.get('/contact', (req, resp)=>{
  resp.send("<h1> this is the contact page</h1>")
})


module.exports = router;