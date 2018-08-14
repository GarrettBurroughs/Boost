class UploadController{
    constructor(){
        this.uploadView = new UploadView();
        this.database = new Database();

        this.uploadView.setUploadAction(() => {
            
        });
    }
}