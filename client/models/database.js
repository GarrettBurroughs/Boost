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

    boost(user){
        
    }

    like(id){
        
    }

    async getClips(){
        let clips = await this.database.ref('clips/').once('value');
        let clipData = clips.val();
        let out = [];
        for(let c in clipData){
            out.push(clipData[c]);
        }
        console.log(out);
        return out;
    }

    async getBoosts(user){

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
            "userId": userId,
            "channelName": channelName,
            "videoLink": videoLink,
            "channelImg": "img",
            "startTime": startTime  
        }
        const clipKey = this.database.ref().child('clips').push().key;
        let updates = {};
        updates['clips/' + clipKey] = clip;
        updates['users/' + userId + '/clips/' + clipKey] = clip;
        this.database.ref().update(updates);
    }

    // api key AIzaSyAxLOLwR7DOqXvDlOMOEvKFJCGAQr69b-I
    // oath key 1082086874729-hfmcoahvlkune1trk4ar0n400scb75sr.apps.googleusercontent.com
    // client secret UJH2DMyej1WETanGOclk7i51
}