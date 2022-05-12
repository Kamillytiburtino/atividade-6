class AtualizarUsuário {
    inputPesquisar = "input"
    inputName = "#userName"
    inputEmail = "#userEmail"
    clicarEmVoltar() {
        cy.get("a[href='/users']").click();
    }

    clicarPesquisar(){
        cy.get("input").click();
    }

    preencherNome(nome) {
        cy.get(this.inputPesquisar).type(nome);
}
    clicarEmDetalhe(){
        cy.get("#userDataDetalhe").click()
    }

    clicarEditar(){
        cy.contains("button", "Editar").click();
    }

    atualizarNome(nome) {
        cy.get(this.inputName).type(nome);
    }

    atualizarEmail(email) {
        cy.get(this.inputEmail).type(email);
    }

    MensagemSucesso(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    apagarEmail() {
        cy.get(this.inputEmail).clear();
}

    apagarNome() {
    cy.get(this.inputName).clear();

}}
export var atualizarUsuário = new AtualizarUsuário();