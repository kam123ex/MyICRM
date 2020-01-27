if(process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts")
const indexRouter = require('./routes/index')
// var bodyParser = require("body-parser");
// var cookieParser = require("cookie-parser");
// var util = require("util");
// var fs = require('fs');

// var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs")
app.set("views", __dirname + "/views")  
app.set("layout", "layouts/layout")

const mongoose = require("mongoose")
mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true })
const db = mongoose.connection
db.on("error", error => console.error(error))
db.once("open", () => console.log("Connected to Mongoose"))

app.use(expressLayouts)
app.use(express.static("public"))

app.use("/", indexRouter)
// app.get("/", (req, res) => {
//   res.render("index.ejs", { name: "kam" })
// })

// app.get("/login", (req, res) => {
//   res.render("login.ejs")
// })

// app.get("/register", (req, res) => {
//   res.render("register.ejs")
// })

app.listen(process.env.PORT || 8080, function() {
  console.log("应用实例，访问地址为 http://localhost:8080")
})
// var user = {
//   "user4" : {
//      "name" : "mohit",
//      "password" : "password4",
//      "profession" : "teacher",
//      "id": 4
//   }
// }
// var id = 2;

// app.use("/public", express.static("public"));
// app.use(cookieParser());

// // app.get("/", function(req, res) {
// //   res.sendFile(__dirname + "/" + "index.html");

// // });

// app.get("/", (req, res) => {
//   res.render("index.ejs")
// })

// app.get('/listUsers', function(req, res) {
//   fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data) {
//     console.log(data);
//     res.end(data);
//   });
// });

// app.get('/addUser', function(req,res) {
//   fs.readFile(__dirname + '/' + "users.json", 'utf8', function (err, data) {
//     data = JSON.parse(data);
//     data['user4'] = user['user4'];
//     console.log( data );
//     res.end(JSON.stringify(data));
//   });  
// });

// app.get('/:id', function(req,res) {
//   fs.readFile(__dirname + '/' + "users.json", 'utf8', function (err, data) {
//     data = JSON.parse(data);
//     var viewUser = data['user' + req.params.id]
//     // var deleteId = data['user' + req.params.id]  
//     // console.log(deleteId);
//     console.log( viewUser );
//     res.end(JSON.stringify(viewUser));
//   });  
// });

// app.get('/deleteUser', function (req, res) {

//   // First read existing users.
//   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       data = JSON.parse( data );
//       delete data["user" + id];
      
//       console.log( data );
//       res.end( JSON.stringify(data));
//   });
// });

// app.post("/process_post", urlencodedParser, function(req, res) {
//   var response = {
//     first_name: req.body.first_name,
//     last_name: req.body.last_name
//   };

//   console.log("Cookies: " + util.inspect(req.cookies.name=response.first_name))
//   console.log("Signed Cookies: ", util.inspect(req.signedCookies.user=response.last_name))
//   console.log(response);
//   res.end(JSON.stringify(response));
// });

// var server = app.listen(8080, function() {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log("应用实例，访问地址为 http://localhost", host, port);
// });
