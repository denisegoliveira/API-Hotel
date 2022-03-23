<p align="center">
    <img src="./img/hotel-img.jpg" alt="Hotel" width="230">
</p>

<h1 align="center"> API Hotel com NodeJs </h1> 


![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge)

<h3 align="center"> Sumário </h3>

<p align="center">
  <a href="#descrição-do-projeto"> Descrição do projeto </a> |
  <a href="#conhecimentos-praticados"> Conhecimentos praticados </a> |
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a> |
  <a href="#ferramentas-e-tecnologias"> Ferramentas e Tecnologias </a>
</p>
<br>

## Descrição do projeto
O objetivo do projeto foi criar uma API para um hotel utilizando NodeJs. 

O projeto foi desenvolvido em grupo e cada integrante ficou responsável pela criação de uma API referente à um dos serviços oferecidos em um hotel ou que tivesse alguma relação com o tema. As entidades escolhidas para o banco de dados foram: clientes, funcionários, cardápio, franquias e quartos. Além do NodeJs, para essa aplicação foram necessários o Express, Sequelize e SQLite3. Também utilizou-se o Insomnia como ferramenta de testes iniciais.

Esta API foi desenvolvida para manipular o banco de dados de ***funcionários*** , e possui funcionalidades para **cadastrar**, **listar**, **atualizar** e **deletar**.
<br>

## Conhecimentos praticados:
:heavy_check_mark: NodeJs <br>
:heavy_check_mark: Express <br>
:heavy_check_mark: SQLite3 <br>
:heavy_check_mark: Sequelize <br>
:heavy_check_mark: CRUD com Sequelize <br>
:heavy_check_mark: Padrão MVC
<br>

## Rotas da aplicação:  

### :hotel: **Funcionarios** 
<br>

<b>[GET] </b> /funcionarios - Exibir informações de todos os funcionários cadastrados.<br>

<b>[GET] </b> /funcionarios/:id - Listar informações de um funcionário de acordo com o ID escolhido.<br>

<b>[POST] </b> /funcionarios/create - Cadastrar um funcionário com as informações passadas no body da requisição.<br>

```javascript
{
    "nome": "nome",
    "sobrenome": "sobrenome",
    "cpf": "11111111111",
    "cargo": "gerente",
    "dataAdmissao": "21/03/2022",
    "salario": "5000",
    "turno": "matutino",
    "email": "nome@email.com",
    "telefone": "00000000000"
}
```

<b>[PATCH] </b> /funcionarios/:id - Atualizar um funcionário com as novas informações passadas no body da requisição. Caso necessário, apenas uma informação pode ser atualizada por vez.<br>

```javascript
{
    "nome": "nome",
    "sobrenome": "sobrenome",
    "cpf": "11111111100",
    "cargo": "recepcionista",
    "dataAdmissao": "01/10/2015",
    "salario": "1700",
    "turno": "noturno",
    "email": "nome@email.com",
    "telefone": "00000000000"
}
```

<b>[DELETE] </b> /funcionarios/:id - Deletar um funcionário baseado no ID escolhido.<br>

### :white_check_mark: **Validação**

Foi adicionada as seguintes validações para os dados recebidos nas requisições: <br>

<b> [POST] </b> /funcionarios/create

- Os campos "nome" e "sobrenome" deverão ser uma string;
- O campo "cpf" deverá conter apenas os números, total de 11 digitos;
- O campo "cargo" deverá ser uma das opções disponíveis (gerente, recepcionista, camareira, supervisor);
- O campo "dataAdmissao" deverá conter uma data no formato 'DD/MM/AAAA';
- O campo "salario" deverá conter apenas números, entre 4 e 7 digitos;
- O campo "turno" deverá ser uma das opções disponíveis (matutino, vespertino, noturno);
- O campo "email" deverá ser uma string no formato email (@mail.com);
- O campo "telefone" deverá conter apenas os números do telefone, total de 11 digitos.

<b> [PATCH] </b> /funcionarios/:id 

Todos os campos podem ser atualizados ao mesmo tempo ou somente um campo de por vez.<br>

### :ballot_box_with_check: **Rodando o projeto**
<br>

#### ***Pré-requisitos:*** <br>

Antes de começar, caso ainda não tenha em sua máquina os itens a seguir, você precisa instalar as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) e [Insomnia](https://insomnia.rest/download) (ou Postman). Além disso, é interessante o uso de um editor de código como o [VSCode](https://code.visualstudio.com/).

### Instalando e rodando o projeto no servidor:


```bash
# Clone este repositório
$ git clone https://github.com/denisegoliveira/API-hotel

# Acesse a pasta do projeto no terminal
$ cd API-hotel

# Instale as dependências do projeto
$ npm install

# Inicie o servidor da aplicação
$ npm start

# Utilize o Insomnia para realizar as requisições nas rotas

# O servidor iniciará em <http://localhost:3000>

```


## Ferramentas e Tecnologias 

<p align="center">
<a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="40" /></a> <a href="https://expressjs.com/pt-br/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" height="40" width="40" /></a> <a href="https://insomnia.rest/download"><img src="https://raw.githubusercontent.com/brunoandreotti/biblioteca-backend/79c23c6a4bdd0bc6cb95463ee47741f2226cb0b1/readme/insomnia.svg" height="40" width="40" /></a> <a href="https://sequelize.org"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="40" /></a> <a href="https://sqlite.org"><img src="https://cdn.worldvectorlogo.com/logos/sqlite.svg" height="40" width="40" /></a> <a href="https://git-scm.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="40" /></a> <a href="https://code.visualstudio.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" height="40" width="40" /></a>
</p>


:exclamation: NOTA:  
O projeto foi desenvolvido para conclusão do Módulo 4 da Turma 10 do curso de Desenvolvimento Web Fullstack da Resilia Educação.
<br>

---
**Desenvolvido por <a href="https://www.linkedin.com/in/bruno-andreotti/">Bruno Andreotti</a>, <a href="https://www.linkedin.com/in/denise-g-oliveira/">Denise Oliveira</a>, <a href="https://www.linkedin.com/in/heitorschumann/">Heitor Schumann</a>, <a href="https://www.linkedin.com/in/henrique-ferraz-a46123219/" > Henrique Ferraz </a> e <a href="https://www.linkedin.com/in/murilo-antunes-bb1143228/">Murilo Antunes</a>.** 
