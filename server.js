const express = require('express');
const app = express();
var ImageKit = require("imagekit");
require('dotenv').config()

var imagekit = new ImageKit({
  urlEndpoint: process.env.urlEndpoint,
  privateKey: process.env.privateKey,
  publicKey: process.env.publicKey,
});

var allimages = [];

//change to format = JPG and PNG

imagekit.listFiles({ searchQuery: 'format="jpg"'}, function(error, result) {
    if (error) console.log(error);
    else
        for (i = 0; i < result.length; i++) {
            allimages.push(result[i].url);
        }       
    console.log(allimages);
});

app.set('view engine', 'html');
app.engine('html',require('ejs').renderFile);

app.get("/", (req, res, next) => {
  res.render("index", { allimages })
//   next();
})

app.get("/index.html", (req, res, next) => {
    res.redirect('/')
  //   next();
})

app.get("/submit", (req, res, next) => {
    res.render("submit")
    // next();
})

app.get("/contact", (req, res, next) => {
    res.render("contact")
    // next();
})

app.use(express.static('views'));

app.listen(3000, () => {
  console.log('server started');
});