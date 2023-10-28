const express = require("express")
const mongoose = require("mongoose")
const MONGODB_URI = require("./config/environment")

const dotenv = require("dotenv").config()
const contactRoutes = require("./routes/contact_routes")// hum is tarah krte hain
const errorHandler = require("./middleware/error_handler")

const app = express()

const port = process.env.PORT || 5000


app.use(express.json())
app.use("/api/contacts", contactRoutes) //require("./routes/contact_routes")
//app.use("/api/users", userRoutes) //require("./routes/contact_routes")
app.use(errorHandler)

try{
app.listen(port,async (req, res) => {
    console.log(`Server is running on port ${port}`)
    connection = await mongoose.connect(MONGODB_URI)
    console.log(' --Database Connected--')
    

})
}catch (error) {
    res.json({
        "Error": "Connection Error"
    })

}


