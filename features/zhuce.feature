Feature: register function test
    注册功能测试。
    负责人：Ronnie
    时间：2017-12-12
    Scenario: 两次输入密码不一致
        Given 导航到注册页面
        When 在注册用户信息中填入注册信息
        Then 点击注册按钮，注册失败，得到错误提示。