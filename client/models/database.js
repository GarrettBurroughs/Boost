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
            },
            "clips" : []
        });
    }

    async boost(userId){
        let userData = await this.database.ref("users/" + userId).once("value");
        console.log(userData);
        let json = userData.val();
        console.log(json);
        json.userInfo.boosts++;
        this.database.ref("users/" + userId + userInfo).set(json);
    }

    async getBoosts(userId){
        let userData = await this.database.ref("users/" + userId).once("value");
        let json = userData.val();
        return json.userInfo.boosts;
    }

    like(id){
        
    }

    async uploadClip(userId, title, channelName, videoLink, startTime){
        let clipCount = await this.database.ref('data/').once('value');
        clipCount = clipCount.val().clips;
        console.log(clipCount);
        this.database.ref('data/').set(
            {clips: clipCount + 1}
        );
        let clip = {
            "id": 3,
            "title": title,
            "channelName": channelName,
            "videoLink": videoLink,
            "channelImg": "img",
            "startTime": startTime  
        }
        const clipKey = this.database.ref().child('clips').push().key;
        let updates = {};
        updates['clips/' + clipKey] = clip;
        updates['users/' + userId + '/' + clipKey] = clip;
        this.database.ref().update(updates);
    }
}