const questions = [
  {
    "question": "DDL significa:",
    "options": [
      "Data Definition Language",
      "Data Delete Language",
      "Database Definition List",
      "Data Development Language"
    ],
    "answer": 0,
    "explanation": "DDL é a Linguagem de Definição de Dados."
  },
  {
    "question": "Qual comando cria um banco de dados?",
    "options": [
      "CREATE DATABASE",
      "CREATE TABLE",
      "INSERT DATABASE",
      "NEW DATABASE"
    ],
    "answer": 0,
    "explanation": "CREATE DATABASE é usado para criar um banco de dados."
  },
  {
    "question": "Qual comando exclui um banco de dados?",
    "options": [
      "DELETE DATABASE",
      "REMOVE DATABASE",
      "DROP DATABASE",
      "DROP TABLE"
    ],
    "answer": 2,
    "explanation": "DROP DATABASE remove o banco de dados."
  },
  {
    "question": "Qual comando cria uma tabela?",
    "options": [
      "CREATE TABLE",
      "NEW TABLE",
      "INSERT TABLE",
      "MAKE TABLE"
    ],
    "answer": 0,
    "explanation": "CREATE TABLE define uma nova tabela."
  },
  {
    "question": "Qual comando exclui uma tabela?",
    "options": [
      "DELETE TABLE",
      "DROP TABLE",
      "REMOVE TABLE",
      "ERASE TABLE"
    ],
    "answer": 1,
    "explanation": "DROP TABLE exclui a tabela."
  },
  {
    "question": "DML significa:",
    "options": [
      "Data Manipulation Language",
      "Data Management List",
      "Database Modification Language",
      "Data Modeling Language"
    ],
    "answer": 0,
    "explanation": "DML é a Linguagem de Manipulação de Dados."
  },
  {
    "question": "Qual comando insere registros em uma tabela?",
    "options": [
      "ADD",
      "INSERT INTO",
      "CREATE ROW",
      "UPDATE"
    ],
    "answer": 1,
    "explanation": "INSERT INTO adiciona novos registros."
  },
  {
    "question": "Qual comando altera dados já existentes?",
    "options": [
      "CHANGE",
      "ALTER DATA",
      "UPDATE",
      "INSERT"
    ],
    "answer": 2,
    "explanation": "UPDATE altera registros existentes."
  },
  {
    "question": "Em um UPDATE, qual cláusula limita quais registros serão alterados?",
    "options": [
      "FROM",
      "WHERE",
      "ORDER BY",
      "VALUES"
    ],
    "answer": 1,
    "explanation": "WHERE define a condição dos registros que serão alterados."
  },
  {
    "question": "O que pode acontecer em UPDATE sem WHERE?",
    "options": [
      "Nada é alterado",
      "A tabela é excluída",
      "Todos os registros podem ser alterados",
      "Só o primeiro registro muda"
    ],
    "answer": 2,
    "explanation": "Sem WHERE, o UPDATE pode afetar todos os registros."
  },
  {
    "question": "Qual comando exclui registros de uma tabela?",
    "options": [
      "DROP",
      "DELETE FROM",
      "REMOVE",
      "CLEAR"
    ],
    "answer": 1,
    "explanation": "DELETE FROM exclui registros."
  },
  {
    "question": "O que pode acontecer em DELETE sem WHERE?",
    "options": [
      "Todos os registros podem ser excluídos",
      "Apenas um registro é excluído",
      "A tabela é renomeada",
      "O banco é excluído"
    ],
    "answer": 0,
    "explanation": "Sem WHERE, DELETE pode excluir todos os registros."
  },
  {
    "question": "DQL significa:",
    "options": [
      "Data Query Language",
      "Data Quality Language",
      "Database Query List",
      "Data Quick Language"
    ],
    "answer": 0,
    "explanation": "DQL é a Linguagem de Consulta de Dados."
  },
  {
    "question": "Qual consulta retorna todos os campos de produtos?",
    "options": [
      "SELECT produtos;",
      "SELECT * FROM produtos;",
      "SHOW * produtos;",
      "GET produtos;"
    ],
    "answer": 1,
    "explanation": "O asterisco (*) representa todos os campos."
  },
  {
    "question": "Como selecionar apenas nome e preco da tabela produtos?",
    "options": [
      "SELECT nome, preco FROM produtos;",
      "SELECT * nome, preco produtos;",
      "GET nome AND preco FROM produtos;",
      "SELECT produtos(nome, preco);"
    ],
    "answer": 0,
    "explanation": "Os campos desejados são listados após SELECT."
  },
  {
    "question": "Qual cláusula é usada para filtrar registros?",
    "options": [
      "FILTER",
      "WHERE",
      "IF",
      "HAVING"
    ],
    "answer": 1,
    "explanation": "WHERE aplica uma condição à consulta."
  },
  {
    "question": "Quando usamos AND entre duas condições?",
    "options": [
      "Quando pelo menos uma deve ser verdadeira",
      "Quando todas as condições devem ser verdadeiras",
      "Para ordenar dados",
      "Para pesquisar textos"
    ],
    "answer": 1,
    "explanation": "AND exige que as condições combinadas sejam verdadeiras."
  },
  {
    "question": "Quando usamos OR entre duas condições?",
    "options": [
      "Quando pelo menos uma condição deve ser verdadeira",
      "Quando todas devem ser verdadeiras",
      "Somente com números",
      "Para excluir registros"
    ],
    "answer": 0,
    "explanation": "OR aceita registros em que pelo menos uma condição seja verdadeira."
  },
  {
    "question": "Qual operador é utilizado para pesquisar padrões em textos?",
    "options": [
      "BETWEEN",
      "IN",
      "LIKE",
      "ORDER BY"
    ],
    "answer": 2,
    "explanation": "LIKE é utilizado para pesquisa de padrões em textos."
  },
  {
    "question": "Qual condição encontra nomes que começam com M?",
    "options": [
      "nome LIKE '%M'",
      "nome LIKE 'M%'",
      "nome LIKE '%M%'",
      "nome = '%M'"
    ],
    "answer": 1,
    "explanation": "M% significa texto iniciado por M."
  },
  {
    "question": "Qual condição encontra nomes que terminam com o?",
    "options": [
      "nome LIKE 'o%'",
      "nome LIKE '%o'",
      "nome LIKE '%o%'",
      "nome = 'o%'"
    ],
    "answer": 1,
    "explanation": "%o significa texto terminado por o."
  },
  {
    "question": "Qual condição encontra nomes que contêm 'mouse'?",
    "options": [
      "nome LIKE 'mouse%'",
      "nome LIKE '%mouse'",
      "nome LIKE '%mouse%'",
      "nome IN 'mouse'"
    ],
    "answer": 2,
    "explanation": "%mouse% procura o trecho em qualquer posição."
  },
  {
    "question": "Qual operador facilita consultar vários valores possíveis?",
    "options": [
      "IN",
      "LIKE",
      "BETWEEN",
      "ASC"
    ],
    "answer": 0,
    "explanation": "IN evita escrever vários OR para valores específicos."
  },
  {
    "question": "Qual consulta está correta para categorias específicas?",
    "options": [
      "WHERE categoria IN ('Monitores','Notebooks','Periféricos')",
      "WHERE categoria = ('Monitores','Notebooks','Periféricos')",
      "WHERE categoria BETWEEN ('Monitores','Periféricos')",
      "WHERE categoria LIKE IN (...)"
    ],
    "answer": 0,
    "explanation": "IN recebe uma lista de valores possíveis."
  },
  {
    "question": "BETWEEN é usado principalmente para:",
    "options": [
      "Excluir intervalos",
      "Pesquisar valores dentro de um intervalo",
      "Ordenar resultados",
      "Criar tabelas"
    ],
    "answer": 1,
    "explanation": "BETWEEN seleciona valores dentro de um intervalo, incluindo os limites no exemplo estudado."
  },
  {
    "question": "O que faz WHERE preco BETWEEN 100 AND 500?",
    "options": [
      "Busca preços menores que 100",
      "Busca preços entre 100 e 500",
      "Busca apenas 100 e 500",
      "Ordena preços"
    ],
    "answer": 1,
    "explanation": "Seleciona valores de preço no intervalo de 100 a 500."
  },
  {
    "question": "ORDER BY preco ASC organiza os preços:",
    "options": [
      "Do maior para o menor",
      "Aleatoriamente",
      "Do menor para o maior",
      "Somente iguais"
    ],
    "answer": 2,
    "explanation": "ASC indica ordem crescente."
  },
  {
    "question": "ORDER BY preco DESC organiza os preços:",
    "options": [
      "Do menor para o maior",
      "Do maior para o menor",
      "Em ordem alfabética apenas",
      "Sem ordenação"
    ],
    "answer": 1,
    "explanation": "DESC indica ordem decrescente."
  },
  {
    "question": "Considere:\nSELECT nome, preco\nFROM produtos\nWHERE categoria = 'Periféricos'\nAND preco BETWEEN 100 AND 500\nORDER BY preco DESC;\nO que a consulta faz?",
    "options": [
      "Exclui periféricos entre 100 e 500",
      "Lista nome e preço dos periféricos entre 100 e 500, do maior preço para o menor",
      "Lista todos os produtos sem filtro",
      "Cria produtos na categoria Periféricos"
    ],
    "answer": 1,
    "explanation": "A consulta seleciona nome e preço, filtra categoria e intervalo e ordena o preço de forma decrescente."
  },
  {
    "question": "Qual alternativa relaciona corretamente os comandos úteis estudados?",
    "options": [
      "USE seleciona o banco; SHOW DATABASES lista bancos; SHOW TABLES lista tabelas; DESC mostra a estrutura de uma tabela.",
      "USE cria o banco; SHOW DATABASES exclui bancos; SHOW TABLES cria tabelas; DESC apaga campos.",
      "USE lista tabelas; SHOW DATABASES seleciona uma tabela; SHOW TABLES altera registros; DESC ordena resultados.",
      "Todos os comandos servem para inserir dados."
    ],
    "answer": 0,
    "explanation": "USE seleciona o banco desejado; SHOW DATABASES lista bancos; SHOW TABLES mostra as tabelas; DESC/DESCRIBE exibe a estrutura da tabela."
  },
  {
    "question": "Observe:\nINSERT INTO produtos (id, nome, preco)\nVALUES (4, 'Mouse', 79.90);\nO que esse comando faz?",
    "options": [
      "Altera o produto de id 4",
      "Insere um novo registro na tabela produtos",
      "Exclui um produto",
      "Consulta o produto Mouse"
    ],
    "answer": 1,
    "explanation": "INSERT INTO, seguido de VALUES, insere um novo registro na tabela."
  },
  {
    "question": "Observe:\nUPDATE produtos\nSET preco = 120.00\nWHERE id = 3;\nQual registro poderá ser alterado?",
    "options": [
      "Todos os produtos",
      "Somente o registro cujo id é 3",
      "Somente produtos com preço 3",
      "Nenhum registro"
    ],
    "answer": 1,
    "explanation": "A cláusula WHERE id = 3 restringe o UPDATE ao registro que satisfaz essa condição."
  },
  {
    "question": "Observe:\nDELETE FROM produtos\nWHERE id = 2;\nQual é o resultado esperado?",
    "options": [
      "Exclusão da tabela produtos",
      "Exclusão de todos os produtos",
      "Exclusão do registro de id 2",
      "Alteração do id 2"
    ],
    "answer": 2,
    "explanation": "DELETE FROM exclui registros e WHERE id = 2 restringe a exclusão ao registro correspondente."
  },
  {
    "question": "Qual consulta seleciona produtos com preço acima de 100 E quantidade acima de 10?",
    "options": [
      "SELECT * FROM produtos WHERE preco > 100 OR quantidade > 10;",
      "SELECT * FROM produtos WHERE preco > 100 AND quantidade > 10;",
      "SELECT * FROM produtos WHERE preco BETWEEN 100 AND quantidade;",
      "SELECT * FROM produtos WHERE preco > 100 IN quantidade > 10;"
    ],
    "answer": 1,
    "explanation": "AND é usado quando as duas condições precisam ser verdadeiras."
  },
  {
    "question": "Qual consulta seleciona produtos da categoria 'Monitores' OU 'Notebooks'?",
    "options": [
      "SELECT * FROM produtos WHERE categoria = 'Monitores' AND categoria = 'Notebooks';",
      "SELECT * FROM produtos WHERE categoria = 'Monitores' OR categoria = 'Notebooks';",
      "SELECT * FROM produtos WHERE categoria BETWEEN 'Monitores' AND 'Notebooks';",
      "SELECT * FROM produtos ORDER BY categoria;"
    ],
    "answer": 1,
    "explanation": "OR é usado quando pelo menos uma das condições deve ser verdadeira."
  },
  {
    "question": "Observe:\nSELECT *\nFROM produtos\nWHERE nome LIKE '%Pro%';\nO que será pesquisado?",
    "options": [
      "Nomes que começam obrigatoriamente com Pro",
      "Nomes que terminam obrigatoriamente com Pro",
      "Nomes que contêm Pro em alguma posição",
      "Somente o nome exatamente igual a Pro"
    ],
    "answer": 2,
    "explanation": "Com % antes e depois do texto, LIKE procura o trecho em qualquer posição."
  },
  {
    "question": "Qual alternativa substitui vários OR de forma mais direta para procurar ids 1, 3 e 5?",
    "options": [
      "WHERE id LIKE (1,3,5)",
      "WHERE id BETWEEN 1 AND 5",
      "WHERE id IN (1,3,5)",
      "WHERE id = 1 AND 3 AND 5"
    ],
    "answer": 2,
    "explanation": "IN permite consultar uma lista de valores específicos."
  },
  {
    "question": "Observe:\nSELECT *\nFROM produtos\nWHERE preco BETWEEN 100 AND 500;\nSegundo o conteúdo estudado, os valores 100 e 500 são considerados?",
    "options": [
      "Não, nenhum dos dois",
      "Somente 100",
      "Somente 500",
      "Sim, os limites são incluídos"
    ],
    "answer": 3,
    "explanation": "No material, BETWEEN procura valores dentro do intervalo incluindo os limites."
  },
  {
    "question": "Observe:\nSELECT nome, preco\nFROM produtos\nWHERE preco > 100\nORDER BY preco ASC;\nComo os resultados serão apresentados?",
    "options": [
      "Produtos acima de 100, do menor preço para o maior",
      "Produtos abaixo de 100, do maior para o menor",
      "Todos os produtos, sem filtro",
      "Produtos acima de 100, do maior preço para o menor"
    ],
    "answer": 0,
    "explanation": "WHERE preco > 100 filtra os registros e ASC ordena do menor para o maior."
  },
  {
    "question": "Você acabou de abrir o MySQL e deseja trabalhar com o banco loja, verificar suas tabelas e depois visualizar a estrutura de produtos. Qual sequência corresponde aos comandos estudados?",
    "options": [
      "USE loja; SHOW TABLES; DESC produtos;",
      "SHOW loja; USE TABLES; SELECT produtos;",
      "CREATE loja; SHOW DATABASES; DROP produtos;",
      "USE produtos; DESC loja; SHOW DATABASES;"
    ],
    "answer": 0,
    "explanation": "USE seleciona o banco, SHOW TABLES lista suas tabelas e DESC/DESCRIBE mostra a estrutura de uma tabela."
  }
];
