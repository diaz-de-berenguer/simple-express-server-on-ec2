const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.send('Hola Mundo!')
})

app.listen(3000, () => console.log("Feel the rhythm\nFeel the rhyme\nGet on up\nIt's serving time!\n\nServer Running!"))
