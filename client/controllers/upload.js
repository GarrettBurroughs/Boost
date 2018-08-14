class UploadController{
    constructor(){
        this.uploadView = new UploadView();
        this.database = new Database();

        this.uploadView.setUploadAction((link, startTime, title) => {
            this.database.uploadClip(USER_LOGIN, title, "Animelord9999", link, startTime)
        });
    }

    render(){
        document.querySelector("body").appendChild(this.uploadView.getDiv());
    }

    unRender(){
        this.uploadView.getDiv().delete();
    }
}