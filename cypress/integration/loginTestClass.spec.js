import loginPage from "../pages/loginPage";

describe('Login test with class',() => {

    before('Enter to the page',() =>{
        cy.visit('https://demoqa.com/login');
    })
    
    it('Login test',() => {
        loginPage.typeUserName('Nahuel test');
        loginPage.typepassword('test');
        loginPage.clickLoginBtn();
    })
})