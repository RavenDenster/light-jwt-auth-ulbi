const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000

const app = express()
const DB_URL = `mongodb+srv://qwerty:qwerty123@cluster0.inrjrhm.mongodb.net/?retryWrites=true&w=majority`

app.use(express.json())
app.use('/auth', authRouter)
mongoose.set('strictQuery', true)

const start = async () => {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlparser: true})
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()