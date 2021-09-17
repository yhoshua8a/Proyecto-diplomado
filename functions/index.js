const functions = require("firebase-functions");
const bodyParser = require('body-parser')


const express = require("express")
const cors = require("cors")

/* Express */
const app = express()
app.use(cors({ origin: true }))


app.post("/login", (request, response) => {

    if(request.body.email === "yhoshua8a@gmail.com" && request.body.password === "1234") {
        response.json({code:400, auth:true})
    }else{
        response.json({code:400, auth:false})
    }
  
})


exports.api = functions.https.onRequest(app); 