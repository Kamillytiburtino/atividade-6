Feature: Deletar um usuario
    Como uma pessoa qualquer
    Desejo remover um usuário
    Para que suas informações não estejam mais registradas

    Background: Acessa o sistema e cria um usuário
        Given  Acessei a página inicial
        And Clico no link novo
        When informe os dados do novo usuário
            | nome  | Nome Fake      |
            | email | fake@teste.com |
        And clico no botão salvar
        Then visualizo uma mensagem de sucesso
            | mensagem | Usuário salvo com sucesso! |
        Given  Acessei a página inicial
        Given clicar no botão da lixeira


    Scenario: Remover usuário com sucesso
            When clico em confirmar
            | texto | Confirmar |
            Then visualizo a mensagem de sucesso de remoção
            | mensagem | Usuário removido! |       
