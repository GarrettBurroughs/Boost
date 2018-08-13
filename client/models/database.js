class Database{
    constructor(){
        this.database = firebase.database();
    }

    getLogin(username){

    }

    createAccount(userId, email, username, password){
        this.database.ref('users/' + userId).set({
            "username": username,
            "email": email,
            "password" : password,
            "userInfo" : {
                "profile_img" : "assets/profile.png",
                "twitch" : "",
                "youtube": "",
                "boosts": 0,
                "Bio" : "No Bio Set"
            }
        });
    }
}