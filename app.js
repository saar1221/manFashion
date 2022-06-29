

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
// const _ = require('lodash');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const images=[];


images.push({
  img_url:"https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/213068245_4281576718569065_8099523304879858439_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=hUL7QaoF7w4AX_uwEv_&_nc_ht=scontent.ftlv5-1.fna&oh=ba1b99b53a85d54a98d45509699e1cee&oe=6171A505",
  title:"String"
},{
  img_url:"https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/213068245_4281576718569065_8099523304879858439_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=hUL7QaoF7w4AX_uwEv_&_nc_ht=scontent.ftlv5-1.fna&oh=ba1b99b53a85d54a98d45509699e1cee&oe=6171A505",
  title:"String"
},{
  img_url:"https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/213068245_4281576718569065_8099523304879858439_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=hUL7QaoF7w4AX_uwEv_&_nc_ht=scontent.ftlv5-1.fna&oh=ba1b99b53a85d54a98d45509699e1cee&oe=6171A505",
  title:"String"
},{
  img_url:"https://scontent.ftlv5-1.fna.fbcdn.net/v/t1.6435-9/213068245_4281576718569065_8099523304879858439_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=a26aad&_nc_ohc=hUL7QaoF7w4AX_uwEv_&_nc_ht=scontent.ftlv5-1.fna&oh=ba1b99b53a85d54a98d45509699e1cee&oe=6171A505",
  title:"String"
});

app.get("/",function(req,res){
  // console.log("seccuss")
res.render("home");
});


app.get("/gallery",function(req,res){
  res.render("gallery",{ images:images  });
});


// app.get("/contact",function(req,res){
//   res.render("contact",{headerName:"Contact",contentParagraph:"contactContent"});
// });

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server started on port 3000");
});
