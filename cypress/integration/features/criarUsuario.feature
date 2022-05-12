Feature: : Criar usuário
    Como uma pessoa qualquer
    Desejo registrar informações de usuário
    Para poder manipular estas informações livremente 

Background: : Acessar a página de criar usuário
    Given  Acessei a página inicial
    And Clico no link novo


    Scenario: Deve ser possível cadastrar um novo usuário
        When informe os dados do novo usuário
            | nome  | Nome Fake      |
            | email | fake@teste.com |
        And clico no botão salvar
        Then visualizo uma mensagem de sucesso
            | mensagem | Usuário salvo com sucesso! |


Scenario: Deve ser possível cadastar um usuário com um email sem o @
    When Preencho o campo nome
        | nome | Maria |
    And Preencho o campo email
        | email | Maria.com |
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro
        | mensagem | Formato de e-mail inválido |


Scenario: Cadastrar usuário com email já cadastrado
    When Preencho o campo nome
        | nome | Maria |
    And Preencho o campo email
        | email | fake@teste.com |
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro
        | mensagem | Este e-mail já é utilizado por outro usuário |

Scenario: Cadastrar usuário com mais de 100 caracteres no nome
    When Preencho o campo nome
        | nome | sjdfaskjdfhsdfhskjfksjfdaksjdhfaskjdhfaskjdfhlkjsdfhlkdjshasdfnaksjdfksajdbfkasjbfdaksbdfaskdbfksljbd |
    And Preencho o campo email
        | email | fake@teste.com |
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro 
        | mensagem | Informe no máximo 100 caracteres para o nome |


Scenario: Cadastrar email com mais de 60 caracteres
    When Preencho o campo nome
        | nome  | Maria |
    And Preencho o campo email
        | email | fakesjdfaskjdfhsfhskjfksjfdhfaskjdhfaskjdfhlkjsdfsd@teste.com | 
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro
        | mensagem | Informe no máximo 60 caracteres para o e-mail |

Scenario: Cadastrar usuário sem preenher o campo nome
    And Preencho o campo email
        | email | k@re.com |
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro
        | mensagem | O campo nome é obrigatório. |

Scenario: Cadastrar usuário sem preenher o campo e-mail
    When Preencho o campo nome
        | nome  | Maria |
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro
        | mensagem | O campo e-mail é obrigatório. |

Scenario: Cadastrar usuário sem nome e sem e-mail
    And clico no botão salvar
        | texto | Salvar |
    Then vizualizo a mensagem de erro que os campos são obrigatórios
        | mensagem_nome | O campo nome é obrigatório.   |
        | mensagem_email | O campo e-mail é obrigatório. |

Scenario: Cadastrar um usuário com um e-mail sem o .com
    When Preencho o campo nome
        | nome  | Maria |
    And Preencho o campo email
        | email | kard@re |
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro
        | mensagem | Formato de e-mail inválido |

Scenario: Cadastrar usuário com nome com menos de 4 caracteres
    When Preencho o campo nome
        | nome  | Bia |
    And Preencho o campo email
        | email | bia@gmail.com |
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro
        | mensagem | Informe pelo menos 4 letras para o nome. |
        
Scenario: Cadastrar usuário com simbolos e números no campo nome
    When Preencho o campo nome
        | nome  | K@m11|
    And Preencho o campo email
        | email | Ka@gmail.com |
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro
        | mensagem | Formato do nome é inválido. |

Scenario: Atualizar usuário para e-mail com menos de 4 caracteres
    When Preencho o campo nome
        | nome  | Bella |
    And Preencho o campo email
        | email | B@g |
    And clico no botão salvar
        | texto | Salvar |
    Then visualizo uma mensagem de erro
        | mensagem | Informe pelo menos 4 caracteres para o e-mail. |