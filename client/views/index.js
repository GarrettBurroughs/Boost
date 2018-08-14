let USER_LOGIN = "Animelord9999";

const body = document.getElementsByTagName("body")[0];
let accountCreation = new CreateAccountController();
accountCreation.render();
let upload = new UploadController();
upload.render();


let edit = new EditProfileView();
body.appendChild(edit.getDiv());