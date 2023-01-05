import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MountConfig } from "cypress/angular";
import { LoginComponent } from "./login.component";

describe('Login Component', () => {
    const config: MountConfig<LoginComponent> = {
        imports: [FormsModule, ReactiveFormsModule],
        declarations: [],
        providers: []
    }
    it('can mount', () => {
        cy.mount(LoginComponent, config)
    })


    describe('form test', () => {
        const username = 'aakash-bist';
        const password = 'aakash@123';

        beforeEach(() => {
            cy.mount(LoginComponent, config)
            cy.get('[formcontrolname="username"]').as('usernameInput');
            cy.get('[formcontrolname="password"]').as('passwordInput');
            cy.get('button').contains('Login').as('loginButton');
        })

        it('should have password input of type password', () => {
            cy.get('@passwordInput').should('have.attr', 'type', 'password')
        })

        it('show both validations errors if login is attempted without entering username and password', () => {
            cy.get('@loginButton').click();
            cy.contains('Username is required')
            cy.contains('Password is required')
        })

        it('show both validations errors if login is attempted without entering password', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Password is required')
        })

        it('show both validations errors if login is attempted without entering username', () => {
            cy.get('@passwordInput').type(username);
            cy.get('@loginButton').click();
            cy.contains('Username is required')
        })

        it("should not show any validation errors before login is attempted", () => {
            cy.contains('Username is required').should('not.exist')
            cy.contains('Password is required').should('not.exist')
        })

        it('should login if both the username and password have been entered', () => {
            cy.get('@usernameInput').type(username);
            cy.get('@passwordInput').type(password);
            cy.get('@loginButton').click();
        })
    })



})