class CreateAccountView{
    constructor(){
        this.createAction;

        // Email Input Field
        this.emailInput = document.createElement("input");
        this.emailInput.input = "text";
        this.emailInput.class = "account-creation";
        this.emailInput.placeholder = "email";

        // Username Input Field
        this.usernameInput = document.createElement("input");
        this.usernameInput.input = "text";
        this.usernameInput.class = "account-creation";
        this.usernameInput.placeholder = "username";

        // Password Input Field
        this.passwordInput = document.createElement("input");
        this.passwordInput.type = "password";
        this.passwordInput.class = "account-creation";
        this.passwordInput.placeholder = "password";

        // Password Confirmation Field 
        this.confirmPasswordInput = document.createElement("input");
        this.confirmPasswordInput.type = "password";
        this.confirmPasswordInput.class = "account-creation";
        this.confirmPasswordInput.placeholder = "confirm password";

        // Title
        this.title = document.createElement("h1");
        this.title.innerHTML = "Create Your Account"

        this.createButton = document.createElement("button");
        this.createButton.innerHTML = "Create Account";
        this.div = document.createElement("div");
        this.div.setAttribute("id", "createAccountLooks");
        this.div.appendChild(this.title);
        this.div.appendChild(this.emailInput);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.usernameInput);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.passwordInput);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.confirmPasswordInput);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.createButton);
        
        
        
        this.createButton.onclick = () => { this.create() };
    }

    setCreateAction(action){
        this.createAction = action;
    }

    create(){
        console.log("Creating Account");
        try{
            this.createAction(
                this.emailInput.value, 
                this.usernameInput.value, 
                this.passwordInput.value, 
                this.confirmPasswordInput.value
            );
        }catch(e){
            alert(e);
        }
    }

    getDiv(){
        return this.div;
    }
    
}