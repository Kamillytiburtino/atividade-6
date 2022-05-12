class RemoverPage {

    verificarMensagemDeSucesso(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }

    clicarLixeira() {
        cy.get("button[data-test='userDataDelete']:first").click();
    }

    clicarEmConfirmar() {
        cy.contains("button", "Confirmar").click();
    }

    mensagemUsuarioRemovido(mensagem) {
        cy.contains(mensagem).should("be.visible");
    }
    
}

export var removerPage = new RemoverPage();