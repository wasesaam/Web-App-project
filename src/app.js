const express = require('express');
const path = require('path');
const app = express();
const hbs = require("hbs");
 const port = process.env.PORT || 3000;

// this code for static path

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path= path.join(__dirname,"../templates/partials");

app.set('view engine','hbs');
app.set('views',template_path);
hbs.registerPartials(partials_path);

app.use(express.static(static_path));
 // routing the page

app.get("/",(req,res)=>{
    res.render("index.hbs");
})
app.get("/about",(req,res)=>{
    res.render("about.hbs");
})
app.get("/weather",(req,res)=>{
    res.render("weather.hbs");
})
app.get("*",(req,res)=>{
    res.render("404error");
})


// listen port number 

app.listen(port,()=>{
    console.log(`Listing the Port  num ${port}`);
})
