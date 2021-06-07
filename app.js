const express = require('express')
const path = require('path')
const http = require('http');
const adminRoute = require('./routes/admin')
const shopRoute = require('./routes/shop')
const app= express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(adminRoute);
app.use(shopRoute);

app.use((req, resp, next) =>{
  resp.status(404).send('<h1>Page not found </h2>')

});
app.listen(3000)
