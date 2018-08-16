class UploadView{
    constructor(){
        this.link = document.createElement("input");
        this.link.class = "upload-input";
        this.link.placeholder = "Youtube Video ID";

        this.startTime = document.createElement("input");
        this.startTime.class = "upload-input";
        this.startTime.placeholder = "Start Time";
        
        this.title = document.createElement("input");
        this.title.class = "upload-input";
        this.title.placeholder = "title";

        this.uploadButton = document.createElement("button");
        this.uploadButton.innerHTML = "Upload";
        this.uploadButton.id = "upload-button";


        this.div = document.createElement("div");
        this.div.appendChild(this.link);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.startTime);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.title);
        this.div.appendChild(document.createElement("br"));
        this.div.appendChild(this.uploadButton);

        
        this.uploadAction;
        this.uploadButton.onclick = () => {
            console.log(this.upload);
            console.log(this);
            this.upload();
        }
    }

    setUploadAction(action){
        this.uploadAction = action;
    }

    upload(){
        try{
            this.uploadAction(this.link.value, this.startTime.value, this.title.value);
        }catch(e){
            console.log(e);
            alert(e);
        }
    }

    getDiv(){
        return this.div;
    }
}