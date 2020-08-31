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
    })

    it('cy.scrollTo() - scroll the window or element to a position', () => {

        cy.get('input[name="username"]').eq(0).type('1016898120@qq.com', { delay: 10 })
        cy.get('input[name="password"]').eq(0).type('123456', { delay:10 })
        // cy.get('[class="el-button"]').click()
        cy.get('.el-button--primary').click()
        cy.get('.menu_btn').contains('平台管理').click()
        cy.get('.el-submenu__title').get('span').contains('权限管理').click()
        cy.get('.el-menu-item').get('span').contains('试用产品管理').click()


        // cy.get('#new').click()
        // cy.get('#save').click()
        // cy.get('.el-select').children().find('[placeholder="请选择产品"]').click({force:true,multiple: true})
        //     .get('.el-select-dropdown__item').get('span').contains('报关操作(企业版)').click()
        //     .get('#num').type(3)
        // cy.get('.el-select').children().find('[placeholder="请选择"]').click({force:true,multiple: true})
        //     .get('.el-scrollbar').get('.el-scrollbar__view').get('li').next().get('span').contains('年').click({force:true,multiple: true})
        //     .get('#save').click()
        // 以上为测试 创建使用产品

            // .get('#edit').first().click({force:true,multiple: true})
            // .get('#num').type(34)
            // .get('.el-select').children().find('[placeholder="请选择"]').click({force:true,multiple: true})
            // .get('.el-scrollbar').get('.el-scrollbar__view').get('li').next().get('span').contains('年').click({force:true,multiple: true})
            // .get('#save').click()


            // .get('#switch').first().click({force:true,multiple: true})
            // .get('.el-button').get('span').contains('取消').click()
            // .get('#switch').first().click({force:true,multiple: true})
            // .get('.el-button').get('span').contains('确定').click()

            // .get('#del').first().click({force:true,multiple: true})
            // .get('.el-button').get('span').contains('确定').click()




        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click({force:true,multiple: true});
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click({force:true,multiple: true});
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click({force:true,multiple: true});
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        // .get('#tab-0').click()
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click({force:true,multiple: true});
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click({force:true,multiple: true});
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click({force:true,multiple: true});
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        // .get('#tab-PAID').click()
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        // .get('#tab-DONE').click()
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click({force:true,multiple: true});
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        // .get('#tab-0').click()
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').prev().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        //     cy.get('.el-select').children().find('[placeholder="全部订单"]').click();
        //     cy.get('.el-scrollbar').children().find('.el-select-dropdown__list').find('li').next().click({force:true,multiple: true})
        //     cy.wait(1500)
        //
        // cy.get('.detil').contains('取消订单').click()
        // cy.get('.el-message-box').find('.el-message-box__btns').find('button').first().wait(500).click({force:true,multiple: true})
        // cy.wait(300)
        // cy.get('.detil').contains('申请发票').click()
        // cy.get('.dialog-footer').find('button').wait(500).click({force:true,multiple: true})
        // cy.wait(300)
        //
        // cy.get('.detil').contains('取消订单').click()
        // cy.get('.el-message-box').find('.el-message-box__btns').find('button').next().wait(500).click({force:true,multiple: true})
        // cy.wait(300)
        // cy.get('.detil').contains('立即支付').click()
        // cy.wait(300)
        // cy.get('.theWay1').first().wait(300).click({force:true,multiple: true})  // 支付方式选择
        // cy.get('.theWay1').next().wait(300).click({force:true,multiple: true})
        //
        // cy.get('.foots').find('.fooschir').find('.buns').click() // 立即支付
        // cy.get('.back-box').wait(300).click()
        // cy.get('.back-box').wait(300).click()  // 返回
        // // cy.get('.sidebar-logo-link').wait(300).click()  // 回到主页
        // cy.visit('http://localhost:9528/home')
        // cy.get('.detil').contains('立即支付').click()
            // 9.找到h1标签，确保其中包含“My First Post”文字
        // .should('contain', '创 建').click()
        //         .should('contain', '企业订单').first().click()
        // cy.get('.hover').click

        // cy.get('.header > button').click()// 9.找到h1标签，确保其中包含“My First Post”文字
// cy.get('.v-page__body > div > button').first().click()
    })
})
