Feature: Listar usuários cadastrados
   Como uma pessoa qualquer
   Desejo consultar todos os usuários cadastrados
   Para ter as informações de todos os usuários  

    Background: Acessar o sistema
        Given acessei a página inicial do sistema
        
    Scenario: Listar usuários cadastrados
            Then visualizo a lista de todos os usuários cadastrados

    Scenario: Não há usuários cadastrados
            Given não existe nenhum usuários cadastrado
            Then visualizo a mensagem de nenhum usuário cadastrado
               
            When clico no botão para cadastrar um novo usuário
            Then visualizo a página de cadastro de usuário