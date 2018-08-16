let LOGGED_IN = false;
let USER_IMG;
let USER_LOGIN;
let USER_CHANNEL;

const body = document.querySelector("body");
let accountCreation = new CreateAccountController();
let upload = new UploadController();
let login = new LoginController();
let editAccount = new EditProfileController();


const uploadButton = document.getElementById('upload');
uploadButton.addEventListener('click', () => {
    console.log("clicked");
    let videoGrid = document.getElementById("vidGrid");
    videoGrid.style.display = "none";
    unRenderEverything();
    upload.render(body);
});


const account = document.getElementById("accountLink");
account.addEventListener('click', () => {
    console.log("clicked");
    let videoGrid = document.getElementById("vidGrid");
    videoGrid.style.display = "none";
    unRenderEverything();
    editAccount.render(body);
});

const homeButton = document.getElementById("home");
homeButton.addEventListener('click', () => {
    let videoGrid = document.getElementById("vidGrid");
    videoGrid.style.display = "flex";
    console.log(videoGrid);
    unRenderEverything();
});

function unRenderEverything(){
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

const database = new Database();
const findNew = document.getElementById("find");
findNew.addEventListener('click', () => {
    let clips = database.getClips();
    let randomClip = clips[Math.floor(Math.random() *  clips.length)];
    
});
