const playButton = document.getElementById('playButton');
const audio = document.getElementById('audioPlayer');

playButton.addEventListener('click', () => {
  audio.play();
});
