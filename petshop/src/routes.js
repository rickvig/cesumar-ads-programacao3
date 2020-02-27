const express = require('express')

const Cliente = require('./models/Cliente')

const routes = express.Router()


routes.get('/', (req, res) => {
    class Pessoa {
        constructor(nome, email) {
            this.nome = nome
            this.email = email
            this.telefone = ""
        }
    }

    class Cliente1 extends Pessoa {
        constructor(nome, email, cpf) {
            if (cpf === undefined)
                throw new Error('opa falta o cpf')
            super(nome, email)
            this.cpf = cpf
            this.sobrenome = ""
        }
    }

    class Fornecedor extends Pessoa {
        constructor(nome, email, cnpj) {
            if (cnpj === undefined)
                throw new Error('opa falta o cnpj')
            super(nome, email)
            this.cnpj = cnpj
            this.nomeFantasia = this.nomeFantasia
        }
    }

    var cliente1 = new Cliente1('Henrique', 'rickuev@gmail.com', '070.824.859-48')
    cliente1.sobrenome = "Vig"
    var cliente2 = new Cliente1('Lorena', 'loh@gmail.com', '')

    // console.log(`pessoa1: ${cliente1.nome} ${cliente1.sobrenome}`)
    // console.log(`pessoa2: ${cliente2.nome} ${cliente2.cpf}`)

    let fornecedor1 = new Fornecedor('Atacadao', 'suporte@atacadao', '2352352/0001')
    fornecedor1.nomeFantasia = "ATACAD"
    // console.log(`fornecedor1: ${fornecedor1.nome} ${fornecedor1.cnpj} ${fornecedor1.nomeFantasia}`)

    const cliente3 = Cliente.create({nome: 'Alice', sobrenome:'Silva', email:'alice@maravilhas.com.br'})

    const pessoas = [
        cliente1,
        cliente2,
        cliente3,
        fornecedor1
    ]


    res.render('pages/home', {
        pessoas: pessoas
    })
})

routes.get('/sobre', (req, res) => {
    res.render('pages/sobre', {
        sobre: {
            numerosDePetsAtendidos: 15 
        }
    })
})

routes.get('/contato', (req, res) => {
    res.render('pages/contato', {
        contato: { 
            email: "ricuev@gmail.com",
            tel: '(44) 99941-0923',
            end: 'Av. São Paulo 3103 apto 85',
         }
    })
})

module.exports = routes;