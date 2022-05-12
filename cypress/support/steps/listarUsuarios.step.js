import { listarPage } from '../pages/listarPage.po';

Given("acessei a página inicial do sistema", () => {
    listarPage.visitar();
});

Then("visualizo a lista de todos os usuários cadastrados", () => {
    listarPage.visualizarListaDeUsuarios();
});

Given("não existe nenhum usuários cadastrado", () => {
    listarPage.nenhumUsuarioCadastrado();
});

Then("visualizo a mensagem de nenhum usuário cadastrado", (mensagem) => {
    listarPage.verificarSemUsuarios();
});

When("clico no botão para cadastrar um novo usuário", () => {
    listarPage.clicarEmCadastrar();
});

Then("visualizo a página de cadastro de usuário", (mensagem) => {
    listarPage.testarUrl();
});


