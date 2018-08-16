let myJson = [
    {
        id: 1,
        title: "The Pedestrian but he's stuck in the sign",
        channelId: "MyMisterFruit",
        channelName: "Mr. Fruit",
        videoLink: '<iframe width="300" height="250" src="https://www.youtube.com/embed/eS9xN8k9VEc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-jT2wxmJeigM/AAAAAAAAAAI/AAAAAAAAAAA/NI11nFicqS4/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    },
    {
        id: 2,
        title: "Call of Overwatch: Black Ops 4",
        channelId: "MyMisterFruit",
        channelName: "Mr. Fruit",
        videoLink: '<iframe width="300" height="250" src="https://www.youtube.com/embed/VEm7Zv_ssls" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-jT2wxmJeigM/AAAAAAAAAAI/AAAAAAAAAAA/NI11nFicqS4/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    },
    {
        id: 3,
        title: "so i got eliminated by a mobile player...",
        channelId: "MrMuselk",
        channelName: "Muselk",
        videoLink: '<iframe width="300" height="250" src="https://www.youtube.com/embed/vpPin9hkZbE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-iWlz7dePNz0/AAAAAAAAAAI/AAAAAAAAAAA/smtPKh-RLTU/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    },
    {
        id: 4,
        title: "10 minutes of medium rare vines that cured my eczema",
        channelId: "UC_HbeJEg3nsg0mscQ9Opkrg",
        channelName: "lily levis",
        videoLink: '<iframe width="300" height="250" src="https://www.youtube.com/embed/Q27Ydr5BuYs" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-xpcnqCNlX0s/AAAAAAAAAAI/AAAAAAAAAAA/oSgQGuqd3Po/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    }
]


let db = new Database();
console.log(myJson);
looks();
db.getClips().then((d) => {
    myJson = d;
    looks();
});


    
let signIn = document.getElementById("accountButton");
let createDiv = document.createElement("div");
document.querySelector('body').appendChild(createDiv);

signIn.onclick = function(){
    createDiv.id = "accountSetup";
    accountCreation.render(createDiv);
    login.render(createDiv);
    document.getElementById("vidGrid").style.display = "none";
    document.querySelector('body').appendChild(createDiv);
};

async function looks(){
    let grid;
    if(document.getElementById("vidGrid")){
        grid = document.getElementById("vidGrid")
    }else{
        grid = document.createElement("div");
        grid.setAttribute("id", "vidGrid");
    }
    
    let main_container = document.getElementById("main_container");
    main_container.appendChild(grid);
    for (i=0; i<myJson.length; i++){
        //content boxes
        let content = document.createElement("div");
        grid.appendChild(content);
        content.className = "content"
            //vid
            let vid = document.createElement("div");
            vid.innerHTML= myJson[i].videoLink;
            vid.className = "vid"
            content.appendChild(vid);

            //details
            let deets = document.createElement("div");
            deets.className = "deets"
            content.appendChild(deets);

                //channel image
                let channelImage = document.createElement("img");    
                channelImage.src = myJson[i].channelImg; 
                channelImage.className = "channelImage"                        
                deets.appendChild(channelImage);

                //details text
                let deetsText = document.createElement("div");
                deetsText.className = "deetsText"
                deets.appendChild(deetsText);  

                    //vid title       
                    let title = document.createElement("h3");
                    title.innerHTML = myJson[i].title;
                    /* title.appendChild(document.createElement("br")) */   
                    title.className = "title"
                    deetsText.appendChild(title);

                    //channel name
                    let chaName = document.createElement("p");
                    chaName.innerHTML = myJson[i].channelName;
                    chaName.className = "chaName";
                    deetsText.appendChild(chaName);

                    //buttons
                    let buttons = document.createElement("div");
                    content.appendChild(buttons);
                    buttons.className = "buttons"
                    
                    //Boost Button
                    let boostButton = document.createElement("button");
                    db.getBoosts(myJson[i].userId).then((d) => {
                        boostButton.innerHTML = d;
                    });
                    boostButton.className = "boostButton", "allButtons";
                    boostButton.onclick = function(){
                        db.boost(myJson[i].userId);
                    }; 

                    //Bounce Button
                    let bounceButton = document.createElement("button");
                    bounceButton.className = "bounceButton", "allButtons";
                    bounceButton.innerHTML = "Bounce";
                    
                    //Subscribe Button
                    console.log("Creating sub butt")
                    let subscribeButton = document.createElement("div");
                    subscribeButton.className = "g-ytsubscribe", "allButtons";
                    console.log(subscribeButton);
                    if(myJson[i].channelId.length <= 20){
                        subscribeButton.setAttribute("data-channel",myJson[i].channelId)
                    }else{
                        subscribeButton.setAttribute("data-channelid",myJson[i].channelId)
                    }
                    // console.log(gapi)
                    // gapi.ytsubscribe.render(subscribeButton, {"channel" : "GoogleDevelopers"});


                    // subscribeButton.setAttribute("data-gapiscan", true);
                    // subscribeButton.setAttribute("data-onload", true);
                    // subscribeButton.setAttribute("data-gapistub", true);
                    console.log(subscribeButton);
                    
                    
                                        
                    buttons.appendChild(boostButton);
                    buttons.appendChild(bounceButton);
                    buttons.appendChild(subscribeButton);
                    
        /* let content = document.createElement("div");
        let p = createElement("p");
        p.innerHTML = myJson[i].title;
        content.appendChild(p);
        content.innerHTML += myJson[i].videoLink;
        let deets = document.createElement("div");
        deets.setAttribute("class", "organization");
        let goodVibes = document.createElement("img");
        let boosts = document.createElement("button");
        boosts.innerHTML = "0";
        let badVibes = document.createElement("img");
        let dislikes = document.createElement("button");
        dislikes.innerHTML = "0"; */
        //FOR GARRETT TO WORK ON CUZ THIS ALL ON HIS COMPUTER, goodVibes AND badVibes NEED IMG SOUCRING. THEY WILL BE, RESPECTFULLY, THE IMAGE FOR THE BOOSTS(LIKES) AND THE IMAGE FOR THE DISLIKES
        // deets.appendChild(goodVibes);
        //deets.appendChild(boosts);
        //deets.appendChild(badVibes);
        //deets.appendChild(dislikes);

        //page.appendChild(video1);
    }
    gapi.ytsubscribe.go(grid);
}

//looks();