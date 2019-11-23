const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname,"client","build", "index.html"))
    })
}
const PORT = process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`Listening on PORT ${PORT}`))