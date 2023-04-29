const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
var useragent = require('express-useragent');
const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

var techylearnertestpackage = require("techylearnertestpackage");

let app = express();
//const AdminRoute = require("./routes/adminRoute");

app.use(bodyParser.urlencoded({
    extended: true, limit: '150mb'
}));
app.use(bodyParser.json({ limit: '150mb' }));

// https://techytestapp1.herokuapp.com/
// mongoose.connect(process.env.MONGOURL || '', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }).then(()=>{
//     // if(data)
//     //     console.log("db success", data)
//     // if(error)
//     //     console.log("db error", error)
//     console.log("Db connected")
// }).catch((ex)=>{
//     console.log("Db connection error")
//     console.log(ex)
// });


// var db = mongoose.connection;

var port = process.env.PORT || 6000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
 
app.use(cors());
app.use(helmet());

// app.use((req,res,next)=>{
//     var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
//     console.log(fullUrl)
//     next();
// })

app.use(useragent.express());

// Sentry.init({
//     dsn: "",
//     tracesSampleRate: 1.0,
//   });

//   const transaction = Sentry.startTransaction({
//     op: "test",
//     name: "My First Test Transaction",
//   });


//app.use(AdminRoute);

app.get('/health', async (req, res) => {
    res.status(200).json({
        status: true,
        d: Date.now(),
		data: new Date()
    });
});
app.get('/sentry/check', async (req, res) => {
    try {
        foo();
        console.log("1")
      } catch (e) {
        // Sentry.captureException(e);
      } finally {
          console.log("sgdfdsg")
        // transaction.finish();
      }
});

techylearnertestpackage.printMsg()

const server = app.listen(port, function () {
    console.log("Running Server on port " + port);
});