const express = require('express')
const app = express()

app.use(express.static('public'))
app.listen(3000, () => console.log("Feel the rhythm\nFeel the rhyme\nGet on up\nIt's serving time!\n\nServer Running!"))
