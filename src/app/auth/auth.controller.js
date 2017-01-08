export class AuthController {
    constructor($auth) {
        'ngInject';
        
        this.$auth = $auth;
    }
    
    register() {
        this.$auth.signup(this.user).then(token => {
            this.$auth.setToken(token);
        });
        console.log("Test")
    }
    
    login() {
        this.$auth.login(this.login.user).then(token => {
            this.$auth.setToken(token);
        });
        console.log("In Login Test")
    }
}
