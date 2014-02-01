'use strict'

document.addEventListener('DOMContentLoaded', function () {
    initializeMediaPlayer()
}, false)

var mediaPlayer

var initializeMediaPlayer = function () {
    mediaPlayer = document.getElementById('player')
    mediaPlayer.controls = false
}

var togglePlayPause = function () {
   var btn = document.getElementById('play-pause-button');
   if (mediaPlayer.paused || mediaPlayer.ended) {
      btn.title = 'Pause';
      btn.innerHTML = 'Pause';
      btn.className = 'pause';
      mediaPlayer.play();
   }
   else {
      btn.title = 'Play';
      btn.innerHTML = 'Play';
      btn.className = 'play';
      mediaPlayer.pause();
   }
}