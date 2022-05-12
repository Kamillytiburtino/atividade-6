Feature: Atualizar um usuário
    Como uma pessoa qualquer
    Desejo atualizar as informações de determinado usuário
    Para ter o registro de suas informações atualizadas

    Background: Acessar ao sistema, criar um usuário e pesquisar o usuário criado
        Given  Acessei a página inicial
        And Clico no link novo
        When informe os dados do novo usuário
            | nome  | Nome Fake      |
            | email | fake@teste.com | 
        And clico no botão salvar
            | texto | Salvar |
        When Clico no botão voltar
        And seleciono o campo pesquisar
        And Pesquiso pelo usuário criado através do email
            | email | fake@teste.com |
        Then Seleciono o usuário criado
        Given Clico no botão editar

    @ignore
    Scenario: Atualizar Usuário com sucesso
        When Atualizo os dados do usuário com sucesso
            | nome | Leticia Silva  |
        And Clico no botão salvar
        Then Visualizo a mensagem de sucesso
            | mensagem | Informações atualizadas com sucesso! |
    @ignore
    Scenario: Atualizar um usuário sem preencher o campo email	
         When Atualizo o nome do usuário com sucesso
            | nome | Leticia Silva |
         And apago o campo e-mail
         And clico no botão salvar
         Then visualizo uma mensagem de erro
            | mensagem | O campo e-mail é obrigatório. |
    @ignore
    Scenario: Atualizar usuário sem colocar um nome	
        When apago o campo nome
        When apago o campo e-mail
        And Atualizo o email do usuário com sucesso
        And clico no botão salvar
            | texto | Salvar |
        Then visualizo uma mensagem de erro
            | mensagem | O campo nome é obrigatório. |
    @ignore
    Scenario: Atualizar usuário com email sem "@"	
        When apago o campo e-mail
        And Atualizo o email do usuário sem @
            | email  | kamillyRTC.com |
        And clico no botão salvar
            | texto | Salvar |
        Then visualizo uma mensagem de erro
            | mensagem | Formato de e-mail inválido |

    @ignore
    Scenario: Atualizar usuário com email sem ".com"	
        When apago o campo e-mail
        And Atualizo o email do usuário sem .com
            | email  | kamillyRTC@ |
        And clico no botão salvar
            | texto | Salvar |
        Then visualizo uma mensagem de erro
            | mensagem | Formato de e-mail inválido |

    @ignore
    Scenario: Atualizar usuário com email maior que 60 caracteres	
        When apago o campo e-mail
        And Atualizo o email do usuário sem .com
            | email  | fakesjdfaskjdfhsfhskjfksjfdhfaskjdhfaskjdfhlkjsdfsd@teste.com |
        And clico no botão salvar
            | texto | Salvar |
        Then visualizo uma mensagem de erro
            | mensagem | Informe no máximo 60 caracteres para o e-mail |
    
    @ignore
    Scenario: Atualizar usuário para nome com mais de 100 caracteres	
        When apago o campo nome
        When Atualizo o nome do usuário com sucesso
            | nome | sjdfaskjdfhsdfhskjfksjfdaksjdhfaskjdhfaskjdfhlkjsdfhlkdjshasdfnaksjdfksajdbfkasjbfdaksbdfaskdbfksljbd |
        And clico no botão salvar
            | texto | Salvar |
        Then visualizo uma mensagem de erro
            | mensagem | Informe no máximo 100 caracteres para o nome |
@ignore
    Scenario: Atualizar usuário para nome com menos de 4 caracteres
        When apago o campo nome
        When Atualizo o nome do usuário com sucesso
            | nome | Let |
         And clico no botão salvar
         Then visualizo uma mensagem de erro
            | mensagem | Informe pelo menos 4 letras para o nome. |

@ignore
    Scenario: Atualizar usuário para e-mail com menos de 4 caracteres
        When apago o campo e-mail
        And Atualizo o email do usuário sem .com
            | email  | B@g |
        And clico no botão salvar
            | texto | Salvar |
        Then visualizo uma mensagem de erro
            | mensagem | Informe pelo menos 4 caracteres para o e-mail. |

    
     