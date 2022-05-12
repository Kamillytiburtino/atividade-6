const { criarUsuario } = require("../pages/crud/criarUsuario.po")


Given ("Acessei a página inicial", () => {
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

})

And ("clico no botão salvar", () => {
    criarUsuario.clicarEmSalvar();
})

Then ("visualizo uma mensagem de sucesso", (tabela) => {
    var dado = tabela.rowsHash();
    criarUsuario.verificarMensagemSucesso(dado.mensagem);
})

When ("Preencho o campo nome", (tabela) => {
    var dado = tabela.rowsHash();
    criarUsuario.preencherNome(dado.nome);
})

And ("Preencho o campo email", (tabela) => {
    var dado = tabela.rowsHash();
    criarUsuario.preencherEmail(dado.email);
})

Then ("visualizo uma mensagem de erro",(tabela) =>{
    var dado = tabela.rowsHash();
    criarUsuario.verificarMensagemErro(dado.mensagem);
})

Then ("vizualizo a mensagem de erro que os campos são obrigatórios", (tabela) => {
    var dado = tabela.rowsHash();
    criarUsuario.mensagemNomeObrigatorio(dado.mensagem_nome);
    criarUsuario.mensagemEmailObrigatorio(dado.mensagem_email)
})

