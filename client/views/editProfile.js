class EditProfileView{
    constructor(){
        this.div = document.createElement("div");
        this.div.classList = "edit-profile"

        this.editYoutube = document.createElement("input");
        this.editYoutube.type = "url";
        this.editYoutube.placeholder = "paste your youtube URL here";

        this.editImg = document.createElement("input");
        this.editImg.type = "url";
        this.editImg.placeholder = "paste your channel img url here";

        this.editTwitch = document.createElement("input");
        this.editTwitch.type = "url";
        this.editTwitch.placeholder = "paste your twitch URL here"

        this.editBio = document.createElement("input");
        this.editBio.type = "text";
        this.editBio.placeholder = "Tell about yourself!";

        this.confirm = document.createElement("button");
        this.confirm.innerHTML = "Save Changes";

        this.div.innerHTML += "Set Profile Image";
        this.div.appendChild(this.editImg);
        this.div.appendChild(document.createElement("br"));
        this.div.innerHTML += "Youtube URL: ";
        this.div.appendChild(this.editYoutube);
        this.div.appendChild(document.createElement("br"));
        this.div.innerHTML += "Twitch URL: ";
        this.div.appendChild(this.editTwitch);
        this.div.appendChild(document.createElement("br"));
        this.div.innerHTML += "Bio: ";
        this.div.appendChild(this.editBio);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.confirm);

        this.submitAction;

        this.confirm.onclick = () => { this.submit(); }
    }

    setSubmitAction(action){
        this.submitAction = action;
    }

    submit(){

        console.log(this.editImg.value);
        console.log(this.editYoutube.value);
        console.log(this.editTwitch.value);
        console.log(this.editBio.value);
        try{
            this.submitAction(
                this.editYoutube.value,
                this.editTwitch.value,
                this.editBio.value, 
                this.editImg.value
            );
        }catch(e){
            console.log(e);
            alert(e);
        }
    }

    getDiv(){
        return this.div;
    }


}
