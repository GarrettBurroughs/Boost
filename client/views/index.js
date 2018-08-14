const body = document.getElementsByTagName("body")[0];
let accountCreation = new CreateAccountController();
accountCreation.render();

let edit = new EditProfileView();
body.appendChild(edit.getDiv());

let upload = new UploadView();
body.appendChild(upload.getDiv);