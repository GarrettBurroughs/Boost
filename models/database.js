class Database{
    constructor(){
        this.database = firebase.database();
    }

    async getLogin(username){
        let usr = await this.database.ref('users/' + username).once('value');
        let usrData = usr.val();
        return usrData.password;
    }

    createAccount(userId, email, username, password){
        this.database.ref('users/' + userId).set({
            "username": username,
            "email": email,
            "password" : password,
            "boosts": 0,
            "userInfo" : {
                "profile_img" : "assets/profile.png",
                "twitch" : "",
                "youtube": "",
                "Bio" : "No Bio Set"
            },
            "clips" : []
        });
    }

    async boost(user){
        let boosts = await this.database.ref('users/' + user).once('value');
        boosts = boosts.val().boosts;
        console.log(boosts);
        this.database.ref('users/' + user).set(
            {"boosts": boosts + 1}
        );
    }

    updateInfo(userId, youtube, twitch, bio, profile_img){
        this.database.ref('users/' + userId + '/userInfo').set({
            "profile_img" : profile_img,
            "twitch" : twitch,
            "youtube": youtube,
            "Bio" : bio
        });
    }

    async getUser(user){
        let usr = await this.database.ref('users/' + user).once('value');
        let usrData = usr.val();
        return usrData;
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
        try{
            let usr = await this.database.ref('users/' + user).once('value');
            let usrData = usr.val();
            console.log(usrData);
            return usrData.boosts;
        }catch(e){
            return 0;
        }        
    }

    async uploadClip(userId, title, channelName, videoLink, startTime, channelImg){
        let clipCount = await this.database.ref('data/').once('value');
        clipCount = clipCount.val().clips;
        console.log(clipCount);
        this.database.ref('data/').set(
            {clips: clipCount + 1}
        );
        let clip = {
            "id": clipCount,
            "title": title,
            "userId": userId,
            "channelName": userId,
            "channelId" : channelName,
            "videoLink": videoLink,
            "channelImg": channelImg,
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