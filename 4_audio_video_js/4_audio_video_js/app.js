const video = document.querySelector('#video')
const playVideo = document.querySelector('#play-video')
const stopVideo = document.querySelector('#stop-video')  
const playStopimg1 = document.querySelector('#play-stop-img1')
const playStopimg2 = document.querySelector('#play-stop-img2')
const audio1 = document.querySelector('#audio-1')
const audio2 = document.querySelector('#audio-2')




function reproducirVideo() {
    video.play()

}


 playVideo.addEventListener('click', reproducirVideo)



function pausarVideo(){
  video.pause()


}

stopVideo.addEventListener('click', pausarVideo)



function toggleAudioUno( ){

  if (audio1.paused) {
    audio1.play()
    playStopimg1.textContent = '⏸️Stop'

}else{
   audio1.pause()
   playStopimg1.textContent = '▶️Play'
 }

}


playStopimg2.addEventListener("click",toggleAudioUno)




stopVideo.addEventListener('click', pausarVideo)



function toggleAudioDos( ){

  if (audio2.paused) {
    audio2.play()
    playStopimg2.textContent = '⏸️Stop'

}else{
   audio2.pause()
   playStopimg2.textContent = '▶️Play'
 }

}


playStopimg2.addEventListener("click",toggleAudioDos)
