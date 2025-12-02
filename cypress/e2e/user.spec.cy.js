import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myinfoPage'

const Chance = require('chance')

const chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyInfoPage()

describe('ORANGE HRM Tests', () => {

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username,userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfoPage.fillPersonalDetails(chance.first(), chance.last())
    myinfoPage.fillEmployeeDetails(chance.integer({min: 0, max: 99999}), chance.integer({min: 0, max: 99999}), chance.integer({min: 0, max: 99999}), '2025-10-12')
    myinfoPage.fillStatus()
    myinfoPage.saveForm()

  })

  
}); 


 
