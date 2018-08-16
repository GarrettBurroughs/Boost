    class LoginView{
    constructor(){
        this.username = "";
        this.password =  "";
        this.loginAction;
        this.div = document.createElement("div");
        this.div.id = "logInLooks";
        this.accountBeginning = document.createElement("div");
        this.accountBeginning.appendChild(this.div);
        this.usernameInput = document.createElement("input");
        this.usernameInput.type = "text";
        this.usernameInput.id = "username";
        this.usernameInput.placeholder = "username";
        this.passwordInput = document.createElement("input");
        this.passwordInput.type = "password";
        this.passwordInput.id = "password";
        this.passwordInput.placeholder = "password"
        this.loginButton = document.createElement("button");
        this.loginButton.id = "login"
        this.loginButton.innerHTML = "login";

        // Title
        this.title = document.createElement("h1");
        this.title.innerHTML = "Log In"
        
        this.div.appendChild(this.title);
        this.div.appendChild(this.usernameInput);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.passwordInput);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.loginButton);

        this.loginButton.onclick = () => { this.login(); } 
    }


    setLoginAction(action){
        this.loginAction = action;
    }

    login(){
        this.username = this.usernameInput.value;
        this.password = this.passwordInput.value;
        try{
            this.loginAction(this.username, this.password);
        }catch(e){
            consle.log(e);
            alert(e);
        }
    }

    getDiv(){
        return this.div;
    }

}