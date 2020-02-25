const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public'))

app.get('/', function (req, res) {

    class Pessoa {
        constructor(nome, email) {
            this.nome = nome
            this.email = email
            this.telefone = ""
        }
    }

    class Cliente extends Pessoa {
        constructor(nome, email, cpf) {
            if(cpf === undefined)
                throw new Error('opa falta o cpf')
            super(nome, email)
            this.cpf = cpf
            this.sobrenome = ""
        }
    }

    class Fornecedor extends Pessoa {
        constructor(nome, email, cnpj) {
            if(cnpj === undefined)
                throw new Error('opa falta o cnpj')
            super(nome, email)
            this.cnpj = cnpj
            this.nomeFantasia = this.nomeFantasia
        }
    }

    var cliente1 = new Cliente('Henrique', 'rickuev@gmail.com', '070.824.859-48')
    cliente1.sobrenome = "Vig"
    var cliente2 = new Cliente('Lorena', 'loh@gmail.com')

    console.log(`pessoa1: ${cliente1.nome} ${cliente1.sobrenome}`)
    console.log(`pessoa2: ${cliente2.nome} ${cliente2.cpf}`)
    
    let fornecedor1 = new Fornecedor('Atacadao', 'suporte@atacadao', '2352352/0001')
    fornecedor1.nomeFantasia = "ATACAD"
    console.log(`fornecedor1: ${fornecedor1.nome} ${fornecedor1.cnpj} ${fornecedor1.nomeFantasia}`)
    

    res.send(`Olá cliente \n\n${cliente1.nome} ${cliente1.sobrenome} opa ${typeof(cliente1)}`)
})

app.listen(port, () =>
    console.log(`Example app listening on port http://localhost:${port}`)
)