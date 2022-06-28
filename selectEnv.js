module.exports = class selectEnv {
    // activeUrl = `${process.env.BASE_URL}`

    activeUrl = ""

    checkEnv(activeEnv) {
        switch(activeEnv) {
            case "demo01":
                this.activeUrl = `${process.env.BASE_URL_DEMO01}`
                break;
    
            case 'prod':
                this.activeUrl = `${process.env.BASE_URL_PROD}`
                break;
        }
    
        
    }
}