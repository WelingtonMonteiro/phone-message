# Teste - Phone message API
### Node.js + MongodDB + Express + Mongoose + Angularjs

Este Projeto foi desenvolvido como parte de um teste para vaga na empresa [GSW](https://www.gsw.com.br/sao-jose-dos-campos-sp).
O teste foi desenvolvido em node.js v10.x.x (última versão de produção recomendada no momento do teste).

Foi usado o ES6 para implementação do código em javascript, o ORM mongoose com conexão com MongoDB, além do framework Express.js para criação das rotas.
Foi utilizado tambem um modulo para gerenciar as variáveis de ambiente chamado ` dotenv `, a fim de padronizar as configurações.
Tambem foram utilizadas para proteção das rotas de api o módulo chamado [` helmet `](https://helmetjs.github.io/) que protege contra diversos métodos de ataques. 

No front foi utilizado o framework [Angularjs](https://angularjs.org/) para renderização das paginas

Para hospedagem foi utilizado o serviço de BaaS (Backend as a Service) chamado [Heroku](https://www.heroku.com/), assim como foi configurado todo o ambiente
de deploy e CI de teste, vinculado o deploy do projeto no github com o deploy no heroku.

Repositório do projeto: [Phone SMS](https://github.com/WelingtonMonteiro/phone-message)

## Iniciando servidor
Após clonar o repositório, navegue até a pasta do projeto e execute o comando: ` npm install ` para baixar e instalar as dependências do projeto.
Em seguida, inicie o servidor executando com comando: `npm start`.  O servidor iniciará na porta `3003`.


## APIS
Foram criadas 2 apis.
Foi usado também um gerador de documentaçao da api, no caso usei um modo basico, mas poderia ter evoluído a doc da api a ponto de disponibilzar um teste restfull por ela.
Gerador de documentação da api usado foi o [Apidoc](http://apidocjs.com/), para atualizar a doc da api basta executar o comando: ` npm doc `, 
toda a documentação referente a api será gerada na pasta ` public/doc `, e disponibilizado na rota `/doc` ao executar o servidor.

Para acessar a doc do projeto com as apis clique aqui: [Phone SMS](https://phone-send-sms.herokuapp.com/doc/)

###	`/message` POST 
Api usada para criar uma nova mensagem sms:
O campo "message" deve conter no máximo 255 caracteres.

```json
    {  
      "userID" : "5be031d249edd40014019e2c",
      "message": "teste de mesa",
      "to": "12988121269",
      "from": "12988121269"
    }
```
### `/messages` GET 
Api que retorna todas as mensagens enviadas cadastrados.

```json
    {
        "_id" : "5c5417e7617dbd4f68d51745",
        "isRead" : false,
        "userID" : "5be031d249edd40014019e2c",
        "message" : "teste de mesa",
        "to" : "12988121269",
        "from" : "12988121269",
        "dateTime" : "2019-02-01T07:56:55.204-02:00",
        "keyBoardsPressed" : "833777783303_33063377772"
    }
```

### Testando com MOCHA
Foram implementados alguns testes unitários para testar apenas o endpoint. Não foram cobertos todos os cenários possíveis.
Foi usado para implementação do teste os módulos MOCHA, CHAI, CHAI-HTTP para o teste unitário.
Para executar o teste execute o comando `npm run test`.
