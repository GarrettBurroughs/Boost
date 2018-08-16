class LoginController {
    constructor(){
        this.loginView = new LoginView();
        this.database = new Database();

        this.loginView.setLoginAction(async (username, password) => {
            let hash  = await this.database.getLogin(username);
            let valid = await bcrypt.compare(password, hash);
            if(valid){
                alert("successfully logged in");
                console.log("Logged In");
                accountCreation.unRender();
                let user = await this.database.getUser(username);
                login.unRender();
                console.log(user);
                USER_LOGIN = true;
                USER_CHANNEL = user.userInfo.youtube;
                USER_IMG = user.userInfo.profile_img;

                if(USER_IMG){
                    document.getElementById("profilePic").src = USER_IMG;
                }

                console.log("showing page");
                document.getElementById("vidGrid").style.display = "flex";
                document.getElementById("accountSetup").remove();
            }else{
                alert("USERNAME AND PASSWORD DON'T MATCH");
            }
        });
    }

    render(element){
        element.appendChild(this.loginView.getDiv());
    }

    unRender(){
        this.loginView.getDiv().remove();
    }
}