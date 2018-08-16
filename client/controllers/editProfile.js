class EditProfileController{
    constructor(){
        this.editView = new EditProfileView();
        this.database = new Database();
        
        this.editView.setSubmitAction((youtube, twitch, bio, profileImg) => {
            if(!LOGGED_IN) throw "Not Logged In"
            console.log(USER_LOGIN, youtube, twitch, bio, profileImg);
            this.database.updateInfo(USER_LOGIN, youtube, twitch, bio, profileImg);
            USER_CHANNEL = youtube;
            USER_IMG = profileImg;
            let img = document.getElementById("profilePic");
            console.log(profileImg);
            img.src = profileImg; 
        });
    }

    render(element){
        element.appendChild(this.editView.getDiv());
    }

    unRender(){
        this.editView.getDiv().remove();
    }
}