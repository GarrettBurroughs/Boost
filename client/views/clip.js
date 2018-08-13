let page = document.createElement("div");
page.setAttribute("class", "nice");
let video1 = document.createElement("video");
video1.setAttribute("class", "video");
video1.style.width = "25vh";
video1.style.height = "85px";
let source1 = document.createElement("source");
source1.setAttribute("src", "testData/video.mp4");
source1.style.width = "100%";
source1.style.height = "90%";
video1.appendChild(source1);
video1.onclick = function(){
    video1.play();
}
setTimeout(function(){
    video1.pause();

})
let deets = document.createElement("div");
deets.setAttribute("class", "organization");
let goodVibes = document.createElement("img");
let boosts = document.createElement("button");
boosts.innerHTML = "0";
let badVibes = document.createElement("img");
let dislikes = document.createElement("button");
dislikes.innerHTML = "0";
/*FOR GARRETT TO WORK ON CUZ THIS ALL ON HIS COMPUTER, goodVibes AND badVibes NEED IMG SOUCRING. THEY WILL BE, RESPECTFULLY, THE IMAGE FOR THE BOOSTS(LIKES) AND THE IMAGE FOR THE DISLIKES*/
deets.appendChild(goodVibes);
deets.appendChild(boosts);
deets.appendChild(badVibes);
deets.appendChild(dislikes);

page.appendChild(video1);
document.querySelector("body").appendChild(page);