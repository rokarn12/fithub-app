// import modules
const express = require('express');
const { json, urlencoded } = express;
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require("dotenv").config();
const cookieParser = require("cookie-parser");
const expressValidator = require("express-validator");
var connect = require("connect");
const path = require("path");

// app
const app = express();
//var app = connect().use(connect.static(__dirname + '/public'));
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'));

// db
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
}).then(() => console.log('DB CONNECTED'))
.catch(err => console.log('DB CONNECTION ERROR', err));


// middleware
app.use(staticFileMiddleware);
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(expressValidator());
app.use(staticFileMiddleware);

// routes
const userRoutes = require("./routes/user");
app.use("/", userRoutes);
const itemRoutes = require("./routes/closet");
app.use("/", itemRoutes);
const outfitRoutes = require("./routes/outfit");
app.use("/", outfitRoutes);

// port
const port = process.env.PORT || 8080;

app.get('/', function (req, res) {
    res.render('index')
  })

// listener
const server = app.listen(port, () => 
    console.log('Server is running on', {port})
);