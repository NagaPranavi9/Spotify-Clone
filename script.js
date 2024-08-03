console.log("Welocme to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = document.getElementsByClassName('songItem');

let songs = [
    {songName:"Its always blue",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Trap",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"They Mad",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Rich the kid",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Closer",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Safety dance",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Back it up",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"}
]

songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].filePath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener("click",() => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity =0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=> {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-play-circle');
        e.target.classList.remove('fa-pause-circle'); 
    })
})