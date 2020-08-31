/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
        cy.visit('http://localhost:9529/login')
    })

    it('cy.scrollTo() - scroll the window or element to a position', () => {

        // cy.get('input[name="username"]').eq(0).type('15200337181', { delay: 10 })
        // cy.get('input[name="password"]').eq(0).type('sa244851359+', { delay:10 })
        // // cy.get('[class="el-button"]').click()
        // cy.get('.el-button--primary').click()
        cy.visit('http://localhost:9529/conpon')
        // cy.get('.el-button--primary').contains('创建').click()
        // cy.get('.el-button--primary')
        //     .get('span')// 9.找到h1标签，确保其中包含“My First Post”文字
        //     .should('contain', '创 建').click()
        cy.get('.header > button').click()// 9.找到h1标签，确保其中包含“My First Post”文字
cy.get('.v-page__body > div > button').first().click()
    })
})
