
class CreateAccountController{
    constructor(){
        this.createView = new CreateAccountView();
        this.data = new Database();

        this.createView.setCreateAction((email, username, password, confirmPassword) => {
            if(password !== confirmPassword) throw "PASSWORDS DO NOT MATCH";
            let userId = username;
            this.data.createAccount(userId, email, username, this.hashPassword(password));
        });
    }

    hashPassword(password){
        return bcrypt.hashSync(password, 8);
    }

    render(){
        document.querySelector("body").appendChild(this.createView.getDiv());
    }

    unRender(){
        this.createView.getDiv().delete();
    }
}