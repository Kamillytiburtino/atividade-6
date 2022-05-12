import { criarUsuario } from "../pages/crud/criarUsuario.po";
import { removerPage } from "../pages/crud/removerUsuario.po";
import { listarPage } from "../pages/listarPage.po";

Given('Acessei a página inicial', () => {
    listarPage.visitar();
});

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

Given("clicar no botão da lixeira", () => {
    removerPage.clicarLixeira();
});

When ("clico em confirmar", () => {
    removerPage.clicarEmConfirmar();
    cy.wait(2000);
})
Then ("visualizo a mensagem de sucesso de remoção", (tabela) => {
        var dado = tabela.rowsHash();
        removerPage.mensagemUsuarioRemovido(dado.mensagem);
})