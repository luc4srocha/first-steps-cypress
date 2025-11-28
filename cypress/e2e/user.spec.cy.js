import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage';
import MenuPage from '../pages/menuPage';


const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('ORANGE HRM Tests', () => {

const selectorsList ={
  firstNameField: "[name='firstName']",
  lastNameField: "[name='lastName']",
  genericField: ".oxd-input--active",
  dateField: "[placeholder='yyyy-dd-mm']",
  genericComboBox: ".oxd-select-text--arrow",
  secondItemComboBox: '.oxd-select-dropdown > :nth-child(2)',
  thirdItemComboBox: '.oxd-select-dropdown > :nth-child(3)',
  dateCloseButton: ".--close",
  submitButton: "[type='submit']"
}


  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username,userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-10-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.genericComboBox).eq(0).click({force: true})
    cy.get(selectorsList.secondItemComboBox).click()
    cy.get(selectorsList.genericComboBox).eq(1).click({force: true})
    cy.get(selectorsList.thirdItemComboBox).click()


  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

  })
  
}); 


 
