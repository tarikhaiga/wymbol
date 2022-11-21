const express = require('express');
const app = express();
var ImageKit = require("imagekit");
require('dotenv').config();
const PORT = process.env.PORT || 3000;

var imagekit = new ImageKit({
  urlEndpoint: process.env.urlEndpoint,
  privateKey: process.env.privateKey,
  publicKey: process.env.publicKey,
});

var allimages = [];
imagekit.listFiles({ fileType: 'image'}, function(error, result) {
    if (error) console.log(error);
    else
        for (i = 0; i < result.length; i++) {
            allimages.push(result[i].url);
        }       
});

app.set('view engine', 'html');
app.engine('html',require('ejs').renderFile);

app.get("/", (req, res, next) => {
  res.render("index", { allimages })
//   next();
})

app.get("/index.html", (req, res, next) => {
    res.redirect('/')
})

app.get("/submit", (req, res, next) => {
    res.render("submit")
})

app.get("/contact", (req, res, next) => {
    res.render("contact")
})

app.use(express.static('views'));

app.listen(PORT, () => {
  console.log('server started');
});