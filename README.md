# API de Filmes

Essa API foi desenvolvida usando NestJS, um framework NodeJS que utiliza TypeScript.

<p style="width: 64px;" align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

Através dessa API é possível listar todos os filmes e buscar um filme pelo seu ID.
O usuário tem uma liberdade de escolher os campos que irá receber na resposta da requisição.
Também é possível fazer paginação através dos parâmetros `limit` e `offset`.

Features:
- TypeScript
- Sequelize
- SQLite
- Swagger

## Instalação de pacotes

```bash
$ npm install
```

## Rodando o APP

```bash
$ npm run start:dev
```

## Rota para testar os endpoints
```
http://localhost:3000/api
```

Autor - [Emannuel Matos](https://linkedin.com/loxt)

Tempo levado:
- Inicio: 04/11/2022 16:14
- Fim: 04/11/2022 18:53
- Total: 2h39m
- Alteração as 23:28 (horário que voltei de outra cidade) para adicionar o Swagger e a documentação da API.
