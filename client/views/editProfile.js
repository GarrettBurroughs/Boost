class EditProfileView{
    constructor(user){
        this.div = document.createElement("div");
        this.div.class = "edit-profile"

        this.editYoutube = document.createElement("input");
        this.editYoutube.type = "url";
        this.editYoutube.placeholder = "paste your youtube URL here"

        this.editTwitch = document.createElement("input");
        this.editTwitch.type = "url";
        this.editTwitch.placeholder = "paste your youtube URL here"

        this.editBio = document.createElement("input");
        this.editBio.type = "url";
        this.editBio.placeholder = "paste your youtube URL here"

        this.editProfilePic = document.createElement("input");
        this.editProfilePic.type = "file";
        this.editProfilePic.accept = "image/png, image/jpeg"

        this.confirm = document.createElement("button");
        this.confirm.innerHTML = "Save Changes";

        this.div.innerHTML += "Youtube URL: ";
        this.div.appendChild(this.editYoutube);
        this.div.appendChild(document.createElement("br"));
        this.div.innerHTML += "Twitch URL: ";
        this.div.appendChild(this.editYoutube);
        this.div.appendChild(document.createElement("br"));
        this.div.innerHTML += "Bio: ";
        this.div.appendChild(this.editYoutube);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.editProfilePic);
        this.div.appendChild(this.confirm);

        this.submitAction;

        this.confirm.onclick = () => { this.submit(); }
    }

    setSubmitAction(action){
        this.submitAction = action;
    }

    submit(){
        console.log(this.editProfilePic.value);
        let test = document.createElement("img");
        test.src = extractFilename(this.editProfilePic.value);
        this.div.appendChild(test);
        try{
            this.submitAction(
                this.editYoutube.value,
                this.editTwitch.value,
                this.editBio.value,
                this.editProfilePic.value
            );
        }catch(e){
            alert(e);
        }
    }

    getDiv(){
        return this.div;
    }


}
