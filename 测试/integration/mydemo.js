/// <reference types="cypress" />
// Selector	Recommended	Notes
// cy.get(‘button’).click()	            Never	通过tag，不推荐
// cy.get(’.btn.btn-large’).click()	    Never	通过class，易变，不推荐
// cy.get(’#main’).click()	                    Sparingly	过id(前要加#)
// cy.contains(‘Submit’).click()	    Depends	通过文本
// cy.get(’[data-cy=submit]’).click()	Always	通过属性
// cy.visit('http://ppfe2-dev.yunbaoguan.cn/user/BusinessOrder')
// cy.get('.el-button--primary').contains('创 建').click()
// cy.get('.el-button--primary')
// .get('span')// 9.找到h1标签，确保其中包含“My First Post”文字
// .should('contain', '创 建').click()
context('Actions', () => {
    beforeEach(() => {
        // cy.visit('http://ppfe2-dev.yunbaoguan.cn/login')

        cy.visit('http://localhost:9528/login')
        // cy.visit('http://ppfe2-dev.yunbaoguan.cn/user/BusinessOrder')
    })

    it('cy.scrollTo() - scroll the window or element to a position', () => {

        cy.get('input[name="username"]').eq(0).type('15200337181', { delay: 100 })
        cy.get('input[name="password"]').eq(0).type('sa244851359+', { delay:100 })
        // cy.get('[class="el-button"]').click()
        console.log(1232131)
        cy.get('.el-button--primary').click()
        cy.visit('http://localhost:9528/home')
        cy.wait(1500)
        cy.visit('http://localhost:9528/user/BusinessOrder')


        .get('#tab-CREATED').click()
        // cy.wait(500)
            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)
        .get('#tab-0').click()
            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)
        .get('#tab-PAID').click()
            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)
        .get('#tab-DONE').click()
            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)
        .get('#tab-0').click()
            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
            cy.wait(1500)

            cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
            cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
            cy.wait(1500)

        cy.get('.detil').contains('取消订单').click()
        cy.get('.el-message-box').find('.el-message-box__btns').find('button').first().wait(500).click({force:true,multiple: true})
        cy.wait(300)
        cy.get('.detil').contains('申请发票').click()
        cy.get('.dialog-footer').find('button').wait(500).click({force:true,multiple: true})
        cy.wait(300)

        cy.get('.detil').contains('取消订单').click()
        cy.get('.el-message-box').find('.el-message-box__btns').find('button').next().wait(500).click({force:true,multiple: true})
        cy.wait(300)
        cy.get('.detil').contains('立即支付').click()
        cy.wait(300)
        cy.get('.theWay1').first().wait(300).click({force:true,multiple: true})  // 支付方式选择
        cy.get('.theWay1').next().wait(300).click({force:true,multiple: true})

        cy.get('.foots').find('.fooschir').find('.buns').click() // 立即支付
        cy.get('.back-box').wait(300).click()
        cy.get('.back-box').wait(300).click()  // 返回
        // cy.get('.sidebar-logo-link').wait(300).click()  // 回到主页
        cy.visit('http://localhost:9528/home')
        // cy.get('.detil').contains('立即支付').click()
            // 9.找到h1标签，确保其中包含“My First Post”文字
        // .should('contain', '创 建').click()
        //         .should('contain', '企业订单').first().click()
        // cy.get('.hover').click

        // cy.get('.header > button').click()// 9.找到h1标签，确保其中包含“My First Post”文字
// cy.get('.v-page__body > div > button').first().click()
    })
})
