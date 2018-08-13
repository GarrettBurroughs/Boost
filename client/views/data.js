let myJson = {
    first = {
        title: "The Pedestrian but he's stuck in the sign",
        channelName: "MyMisterFruit",
        videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/eS9xN8k9VEc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-jT2wxmJeigM/AAAAAAAAAAI/AAAAAAAAAAA/NI11nFicqS4/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'        
    },
    second = {
        title: "Call of Overwatch: Black Ops 4",
        channelName: "MyMisterFruit",
        videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VEm7Zv_ssls" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-jT2wxmJeigM/AAAAAAAAAAI/AAAAAAAAAAA/NI11nFicqS4/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    },
    third = {
        title: "so i got eliminated by a mobile player...",
        channelName: "MrMuselk",
        videoLink: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vpPin9hkZbE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>',
        channelImg: 'https://yt3.ggpht.com/-iWlz7dePNz0/AAAAAAAAAAI/AAAAAAAAAAA/smtPKh-RLTU/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg'
    }
}
function looks(){
    let grid = document.getElementById("vidGrid");
for (i=0; i<myJson.length; i++){
    let content = document.createElement("div");
    grid.appendChild(content)
    let vid = document.createElement("div");
    vid.innerHTML= myJson[i].videoLink;
    content.appendChild(vid);
    let deets = document.createElement("div");
    content.appendChild(deets);
    let channelImage = document.createElement("img");    
    channelImage.src = myJson[i].channelImg; 
    deets.appendChild(channelImage)
    let deetsText = document.createElement("div")
    deets.appendChild(deetsText);         
    let title = document.createElement("h3");
    title.innerHTML = myJson[i].title;   
       
            
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
/*FOR GARRETT TO WORK ON CUZ THIS ALL ON HIS COMPUTER, goodVibes AND badVibes NEED IMG SOUCRING. THEY WILL BE, RESPECTFULLY, THE IMAGE FOR THE BOOSTS(LIKES) AND THE IMAGE FOR THE DISLIKES*/
deets.appendChild(goodVibes);
deets.appendChild(boosts);
deets.appendChild(badVibes);
deets.appendChild(dislikes);

page.appendChild(video1);
    }    
}