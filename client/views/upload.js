class UploadView{
    constructor(){
        this.link = document.createElement("input");
        this.link.class = "upload-input";
        this.link.placeholder = "video URL";

        this.startTime = document.createElement("input");
        this.startTime.class = "upload-input";
        this.startTime.placeholder = "video URL";
        
        this.title = document.createElement("input");
        this.title.class = "upload-input";
        this.title.placeholder = "title";

        this.upload = document.createElement("button");
        this.upload.innerHTML = "Upload";
        this.upload.id = "upload-button"

        this.div = document.createElement("div");
        this.div.appendChild(this.link);
        this.div.appendChild(this.startTime);
        this.div.appendChild(this.title);

        
        this.uploadAction;
        this.upload.onclick = () => { this.upload(); }
    }

    setUploadAction(action){
        this.uploadAction = action;
    }

    upload(){
        this.uploadAction(this.link.value, this.startTime.value, this.title.value);
    }

    getDiv(){
        return this.div;
    }
}