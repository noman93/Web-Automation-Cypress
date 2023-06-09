class LoginPage{
    userLogin(username,password){
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
        cy.get('#menu-toggle > .fa').click();
        cy.get('.sidebar-nav > :nth-child(4) > a').click();
        cy.get('#txt-username').type(username);
        cy.get('#txt-password').type(password);
        cy.get('#btn-login').click();
    }
    invalidAssertion(){
        cy.get('.text-danger').should("have.text","Login failed! Please ensure the username and password are valid.")

    }
}

export default LoginPage;