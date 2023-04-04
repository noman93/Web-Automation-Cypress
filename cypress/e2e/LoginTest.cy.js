import LoginPage from "../pages/LoginPage";

describe("Testing login functionality",()=>{
    const loginPage = new LoginPage()
    before(()=>{
        cy.viewport(1920,1080);
    })
 


    it("Testing with valid credentials",()=>{
        loginPage.userLogin("John Doe","ThisIsNotAPassword")

    })

    it("Testing with  invalid credentials",()=>{
        loginPage.userLogin("John Kabir","ThisIsNotAPassword")
        loginPage.invalidAssertion();
    })
}) 