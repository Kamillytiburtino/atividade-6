class CriarUsuario {
    inputName = "#name";
    inputEmail = "#email";

      visitar() {
        cy.visit("https://academy-crud-frontend.herokuapp.com/users");
    }

    clicarNovo() {
        cy.get("a[href='/users/novo']").click();
    }

    preencherEmail(email) {
        cy.get(this.inputEmail).type(email);
      }

    preencherNome(nome) {
        cy.get(this.inputName).type(nome);
    }

    preencherFormulario(tabela) {
       var dado = tabela.rowsHash();
       this.preencherNome(dado.nome);
       this.preencherEmail(dado.email);
    }
    
    clicarEmSalvar() {
      cy.get("button.sc-kDDrLX.ghcSEQ").click();
    }

    verificarMensagemSucesso(mensagem) {
      cy.contains(mensagem).should("be.visible");

    }
  
    verificarMensagemErro(mensagem) {
        cy.contains(mensagem).should("be.visible");
      }
    
    mensagemNomeObrigatorio(mensagem) {
      cy.contains(mensagem).should("be.visible");
    }

    mensagemEmailObrigatorio(mensagem) {
      cy.contains(mensagem).should("be.visible");
    }
}

export var criarUsuario = new CriarUsuario();