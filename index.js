const express = require("express")
const cors = require("cors")
const connectdb = require("./Database/connectdb")
const route = require("./Route/Contactroute")

require ('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())
connectdb()
app.use('/',route)

const port = process.env.PORT 
app.listen(port,()=>{
    console.log("server starts successfully")
})
