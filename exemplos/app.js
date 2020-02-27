const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
    res.send(`Olá `)
})

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);

    class Pessoa {
        constructor(nome, email) {
            this.nome = nome
            this.email = email
            this.telefone = ""
            this.endereco = {}
        }
    }

    class Cliente extends Pessoa {
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

    class Endereco {
        constructor(
            cep, rua, numero,
            bairro, cidade, estado) {

            if (cep === undefined)
                throw new Error('opa falta o cep');

            this.cep = cep;
            this.rua = rua;
            this.numero = numero;
            this.bairro = bairro;
            this.cidade = cidade;
            this.estado = estado;
        }
    }

    var cliente1 = new Cliente('Henrique', 'rickuev@gmail.com', '070.824.859-48')
    cliente1.sobrenome = "Vig"
    var cliente2 = new Cliente('Lorena', 'loh@gmail.com', '')

    console.log(`pessoa1: ${cliente1.nome} ${cliente1.sobrenome}`)
    console.log(`pessoa2: ${cliente2.nome} ${cliente2.cpf}`)

    let fornecedor1 = new Fornecedor('Atacadao', 'suporte@atacadao', '2352352/0001')
    fornecedor1.nomeFantasia = "ATACAD"

    console.log(`fornecedor1: ${fornecedor1.nome} ${fornecedor1.cnpj} ${fornecedor1.nomeFantasia}`)

    let endereco1 = new Endereco(87005040, "são paulo", 3101, "vila bosque", 'Maringá', 'PR')
    console.log(endereco1)

    cliente1.endereco = endereco1

    console.log('\n\nCLIENTE 1:\n')
    console.log(cliente1)
})