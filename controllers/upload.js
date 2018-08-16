class UploadController{
    constructor(){
        this.uploadView = new UploadView();
        this.database = new Database();

        this.uploadView.setUploadAction((id, startTime, title) => {
            let end = parseInt(startTime) + 30;
            let embed = '<iframe width="300" height="250" src="https://www.youtube.com/embed/' + id + '?start=' + startTime + '?end=' + end + '" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            // if(!USER_CHANNEL) throw "User youtube channel not defined"
            // if(!LOGGED_IN) throw "Not logged in!"
            this.database.uploadClip(USER_LOGIN, title, USER_CHANNEL, embed, startTime, USER_IMG);
            alert("Clip Uploaded!");
            upload.unRender();
            let grid = document.getElementById("vidGrid");
            grid.style.display = "flex";
            grid.innerHTML = "";
            looks();
        });
    }

    render(element){
        element.appendChild(this.uploadView.getDiv());
    }

    unRender(){
        console.log("upload Deleted");
        this.uploadView.getDiv().remove();
    }
}

//<iframe width="300" height="250" src="https://www.youtube.com/embed/  Q27Ydr5BuYs " frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>