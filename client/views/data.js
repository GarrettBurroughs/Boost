let myJson = [
    {
        id: 1,
        title: "The Pedestrian but he's stuck in the sign",
        channelName: "MyMisterFruit",
        videoLink: '<iframe width="400" height="250" src="https://www.youtube.com/embed/eS9xN8k9VEc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-jT2wxmJeigM/AAAAAAAAAAI/AAAAAAAAAAA/NI11nFicqS4/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    },
    {
        id: 2,
        title: "Call of Overwatch: Black Ops 4",
        channelName: "MyMisterFruit",
        videoLink: '<iframe width="400" height="250" src="https://www.youtube.com/embed/VEm7Zv_ssls" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-jT2wxmJeigM/AAAAAAAAAAI/AAAAAAAAAAA/NI11nFicqS4/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    },
    {
        id: 3,
        title: "so i got eliminated by a mobile player...",
        channelName: "MrMuselk",
        videoLink: '<iframe width="400" height="250" src="https://www.youtube.com/embed/vpPin9hkZbE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-iWlz7dePNz0/AAAAAAAAAAI/AAAAAAAAAAA/smtPKh-RLTU/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    }
]

let db = new Database();

function looks(){
    let grid = document.getElementById("vidGrid");
    grid.id = "grid"
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
                    
                    //Boost Button
                    let boostButton = document.createElement("button");
                    let boostCount = 0;
                    boostButton.innerHTML = "" + boostCount;
                    boostButton.className = "boostButton", "allButtons"

                    //Bounce Button
                    let bounceButton = document.createElement("button");
                    bounceButton.className = "bounceButton", "allButtons"
                    
                    //Subscribe Button
                    let subscribeButton = document.createElement("button");
                    let subscriberCount = myJson[i].subscriberCount;
                    subscribeButton.className = "subscribButton", "allButtons"
                    
                    //Redirect Button
                    let redirectButton = document.createElement("button");
                    redirectButton.className = "redirectButton", "allButtons"
                    boostButton.onclick = function(){
                        db.boost(myJson[i].channelName);
                        let ref = database.ref("userInfo/boosts")
                    };
                    
                    buttons.appendChild(boostButton);
                    buttons.appendChild(bounceButton);
                    buttons.appendChild(subscribeButton);
                    buttons.appendChild(redirectButton);
        
                
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
}

looks();