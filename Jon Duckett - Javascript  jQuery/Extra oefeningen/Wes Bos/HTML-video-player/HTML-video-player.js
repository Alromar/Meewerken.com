//extra: full screen button

//1: Get elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const audi = document.querySelector('.audi')
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//2: Bouw functions
function togglePlay() {
    //verkort met ternary operator:
   //  const audimethod = audi.paused ? 'play' : 'pause';
    const method = video.paused ? 'play': 'pause';
    video[method]();
    
   //  const method2 = audi.paused ? 'play': 'pause';
   //  video[method2]();
//     if (video.paused) {
//         video.play();
//     } else {
//         video.pause
//     }
 }

 function audioPlay(){
   if(audi.paused) {
      audi.play();
      console.log('play');
   } else {
      audi.pause();
      console.log('pauze');
   }
 }

//4:function maken verander play-knop, naaar pause-knop

 function updateButton() {
    //  console.log('update the button');
     const icon = this.paused ? '►' : '❚ ❚';
     console.log(icon)
      toggle.textContent = icon;
 }
//6: function skip-buttons
 function skip(){
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
 }

//progress bar
//handle progress %
function handleProgress() {
   const percent = (video.currentTime / video.duration) * 100;
   progressBar.style.flexBasis = `${percent}%`;
}
//scrubbar
function scrub(e) {
   const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
   video.currentTime = scrubTime; 
   console.log(e);
}

 //
 function handleRangeUpdate() {
   video[this.name] = this.value;
   console.log(this.name)
;   console.log(this.value);
 }

 //3: event listeners
video.addEventListener('click', togglePlay);
//5: event listener maken check play
//iedere keer er geklikt op de video of de play-button, console.log regel 25
// audi.addEventListener('click', togglePlay);
video.addEventListener('play',updateButton);
video.addEventListener('pause',updateButton);
//progress bar
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener('click',togglePlay);

//7: event-listener skip-buttons
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));
progress.addEventListener('click', scrub);
// progress.addEventListener('mousemove', () => {
//    if(mousedown) {
//       scrub();
//    }
// });
let mousedown = false;
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);
progress.addEventListener('mousemove', () => mousedown && scrub(e));



