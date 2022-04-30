import loginPage from "../pages/loginPage";

describe('Login test with class',() => {

    before('Enter to the page',() =>{
        cy.visit('/login');
    })

    it('Check label texts',() => {
        loginPage.userNameLabel('UserName :');
        loginPage.passwordLabel('Password :');
    })
    
    it('Login test with wrong credentials',() => {
        loginPage.typeUserName('Nahuel test');
        loginPage.typepassword('test');
        loginPage.clickLoginBtn();
        cy.wait(2000);
       
    })
})