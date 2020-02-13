const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', function (req, res) {

    class Pessoa {
        constructor(nome) {
            this.nome = nome
        }

        anda() {
            return `${this.nome} andando...`
        }
    }

    var p1 = new Pessoa('henrique')
    p1.sobrenome = "Vig"

    res.send(`Hello World \n\n${p1.anda()} ${p1.sobrenome}`)
})

app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
)