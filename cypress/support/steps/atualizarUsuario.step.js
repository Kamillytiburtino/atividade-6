import { atualizarUsuário } from "../pages/crud/atualizarUsario.po";
import { criarUsuario } from "../pages/crud/criarUsuario.po"

Given(" Acessei a página inicial", () => {
    criarUsuario.visitar();
})

And ("Clico no link novo", () => {
    criarUsuario.clicarNovo()
})

When ("informe os dados do novo usuário", (tabela) => {
    var dado = tabela.rowsHash();
    criarUsuario.preencherFormulario(tabela);
    cy.intercept("POST", "https://crud-api-academy.herokuapp.com/api/v1/users", {
        statusCode: 201,
        body: [{
            "id": "591a9321-2e1f-4316-83ec-466160c6c209",
            "name": dado.nome,
            "email": dado.email,
            "createdAt": "2022-05-11T02:13:21.149Z",
            "updatedAt": "2022-05-11T02:13:21.149Z"
        }]
    });

And ("clico no botão salvar", () => {
        criarUsuario.clicarEmSalvar().click();
    })

When ("Clico no botão voltar", () => {
    cy.wait(2000);
    atualizarUsuário.clicarEmVoltar();
})

And ("seleciono o campo pesquisar", (tabela) => {
    atualizarUsuário.clicarPesquisar()
})

And ("Pesquiso pelo usuário criado através do email", () => {
    var dado = tabela.rowsHash();
    atualizarUsuário.preencherNome(dado.email);
})

Then ("Seleciono o usuário criado", () => {
    atualizarUsuário.clicarEmDetalhe();
})

And ("Clico no botão editar", () => {
    atualizarUsuário.clicarEditar();
})

When ("Atualizo o nome do usuário com sucesso", (tabela) => {
    var dado = tabela.rowsHash();
    atualizarUsuário.atualizarNome(dado.nome)
})

And ("Clico no botão salvar", () => {
    criarUsuario.clicarEmSalvar();
})

Then ("Visualizo a mensagem de sucesso", (tabela) => {
    var dado = tabela.rowsHash();
    atualizarUsuário.MensagemSucesso(dado.mensagem);
})
When ("apago o campo e-mail", () => {
    atualizarUsuário.apagarEmail();
})
When ("apago o campo nome", () => {
    atualizarUsuário.apagarNome();
})

When ("Atualizo o email do usuário com sucesso", (tabela) => {
    atualizarUsuário.apagarEmail
    var dado = tabela.rowsHash();
    atualizarUsuário.atualizarEmail(dado.email)
})
And ("Atualizo o email do usuário sem @", (tabela) => {
    atualizarUsuário.apagarEmail
    var dado = tabela.rowsHash();
    atualizarUsuário.atualizarEmail(dado.email)
})

And ("Atualizo o email do usuário sem .com", (tabela) => {
    atualizarUsuário.apagarEmail
    var dado = tabela.rowsHash();
    atualizarUsuário.atualizarEmail(dado.email)
})


})