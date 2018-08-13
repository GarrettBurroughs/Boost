class LoginView{
    constructor(){
        this.username = "hi";
        this.password =  "gart";
        this.loginAction;

        this.div = document.createElement("div");
        this.div.id = "logInLooks";
        this.usernameInput = document.createElement("input");
        this.usernameInput.type = "text";
        this.usernameInput.id = "username";
        this.passwordInput = document.createElement("input");
        this.passwordInput.type = "text";
        this.passwordInput.id = "password";
        this.loginButton = document.createElement("button");
        this.loginButton.id = "login"
        this.loginButton.innerHTML = "login";
        this.div.appendChild(this.usernameInput);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.passwordInput);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.loginButton);

        this.loginButton.onclick = () => { this.login(); } 
    }



    hashPassword(password){
        console.log(password);
        return bcrypt.hashSync(password, 8);
    }

    setLoginAction(action){
        this.loginAction = action;
    }

    login(){
        this.username = this.usernameInput.value;
        this.password = this.passwordInput.value;
        hash = this.password = this.hashPassword(this.password);
        console.log(this.username, this.password);
        this.loginAction(this.username, this.password);
    }

    getDiv(){
        return this.div;
    }

}