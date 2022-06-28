const selectEnv = require('./../../selectEnv')
const env = new selectEnv()
env.checkEnv(`${process.env.ACTIVE_ENV}`)

class login2Page {
    isOnLoginPage(){
        browser.url(env.activeUrl + '/login')
    }

    // login(username,password){
    //     this.username.setValue(username)
    //     this.password.setValue(password)
    //     this.btnSubmit.click();
    // }

    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }

    get btnLogout () {
        return $('.icon-2x.icon-signout')
    }
}
module.exports = new login2Page()