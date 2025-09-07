console.log("welcome to Spotify")

//Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('index.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');

let songs = 
[
    
     {songName: "Photograph", filePath: "songs/1.mp3", coverPath: "cover/1.jpg "},
     {songName: "Ganja Ko Sahara", filePath: "songs/2.mp3", coverPath: "cover/2.jpg "},
     {songName: "Hey Jude", filePath: "songs/3.mp3", coverPath: "cover/3.jpg "},
     {songName: "IIlahi", filePath: "songs/4.mp3", coverPath: "cover/4.jpg "},
     {songName: "Kodaline", filePath: "songs/5.mp3", coverPath: "cover/5.jpg "},
     {songName: "Let Me Down", filePath: "songs/6.mp3", coverPath: "cover/6.jpg "},
     {songName: "Changes", filePath: "songs/7.mp3", coverPath: "cover/7.jpg "},
     {songName: "Maicha", filePath: "songs/8.mp3", coverPath: "cover/8.jpg "},
     {songName: "Memories", filePath: "songs/9.mp3", coverPath: "cover/9.jpg "},
     {songName: "Maya Sansar", filePath: "songs/10.mp3", coverPath: "cover/10.jpg "},
     {songName: "MAya ko Katha", filePath: "songs/11.mp3", coverPath: "cover/11.jpg "},
     {songName: "Narisauna", filePath: "songs/12.mp3", coverPath: "cover/12.jpg "},
     {songName: "Kholai Khola", filePath: "songs/13.mp3", coverPath: "cover/13.jpg "},
     {songName: "perfect", filePath: "songs/14.mp3", coverPath: "cover/14.jpg "},
     {songName: "Peeloon", filePath: "songs/15.mp3", coverPath: "cover/15.jpg "},
     
    ]
    

//audioElement.play()

//handle play pause click

masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
}
else
{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
}
})

  //Listen to events

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

    //update seekbar
    //kati percent chalisakyo herna 

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);

    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
}
)

const makeAllPLays = ()=>{
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',  (e)=>{
        makeAllPLays();
        
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=14){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');   


})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');   
})


