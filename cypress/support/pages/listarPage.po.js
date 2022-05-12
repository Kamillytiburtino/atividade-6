class ListarPage {
    visitar() {
        cy.visit("");
    }

    nenhumUsuarioCadastrado() {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 200,
            body: []
        });
    }

    verificarSemUsuarios() {
        cy.contains("Ops! Não existe nenhum usuário para ser exibido.");
    }

    clicarEmCadastrar() {
        cy.contains("p", "Cadastre um novo usuário").click();
    }
/// colocar mais usuarios ///

    visualizarListaDeUsuarios() {
        cy.intercept("https://crud-api-academy.herokuapp.com/api/v1/users", {
            statusCode: 200,
            body: [{
                "id": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                "name": "Name Surname",
                "email": "user@example.com",
                "createdAt": "2022-05-07T14:33:51.582Z",
                "updatedAt": "2022-05-07T14:33:51.582Z"
            }]
        });
        cy.contains("Name Surname");
        cy.contains("user@example.com")
    }
    testarUrl() {
        cy.url().should("be.equal", "https://academy-crud-frontend.herokuapp.com/users/novo");
    }
}

export var listarPage = new ListarPage();