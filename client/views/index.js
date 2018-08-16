let LOGGED_IN = false;
let USER_IMG;
let USER_LOGIN;
let USER_CHANNEL;

const body = document.querySelector("body");
let accountCreation = new CreateAccountController();
let upload = new UploadController();
let login = new LoginController();
let editAccount = new EditProfileController();


const uploadButton = document.getElementById('uploadButt');
uploadButton.addEventListener('click', () => {
    unRenderEverything();
    let uploadDiv = document.createElement("div");
    uploadDiv.id = "upload";
    console.log("clicked");
    let videoGrid = document.getElementById("vidGrid");
    videoGrid.style.display = "none";
    upload.render(uploadDiv);
    document.querySelector("body").appendChild(uploadDiv);
});


const account = document.getElementById("accountLink");
account.addEventListener('click', () => {
    unRenderEverything();
    console.log("clicked");
    let videoGrid = document.getElementById("vidGrid");
    videoGrid.style.display = "none";
    let editDiv = document.createElement("div");
    editDiv.id = "editDiv"
    editAccount.render(editDiv);
    document.querySelector("body").appendChild(editDiv);

});

const homeButton = document.getElementById("home");
homeButton.addEventListener('click', async () => {
    unRenderEverything();
    myJson = await db.getClips();
    let videoGrid = document.getElementById("vidGrid");
    videoGrid.style.display = "flex";
    videoGrid.innerHTML = "";
    console.log(videoGrid);
    looks();
});

function unRenderEverything(){
    let videoGrid = document.getElementById("vidGrid");
    videoGrid.style.display = "none";
    try{
        document.getElementById("accountSetup").remove();
    }catch{}
    try{
        document.getElementById("upload").remove();
    }catch{}
    try{
        document.getElementById("editDiv").remove();
    }catch{}
    try{
        upload.unRender();
    }catch{}
    try{
        editAccount.unRender();
    }catch{}
    try{
        accountCreation.unRender();
    }catch{}
    try{
        login.unRender();
    }catch{}
}

const findNew = document.getElementById("find");
findNew.addEventListener('click', async () => {
    let clips = await db.getClips();
    console.log(clips);
    let c = Math.floor(Math.random() *  clips.length);
    console.log(Math.floor(Math.random() *  clips.length));
    let randomClip = clips[c];
    let videoGrid = document.getElementById("vidGrid");
    videoGrid.innerHTML= "";
    console.log(randomClip);
    myJson = [randomClip];
    looks();
    
});
