document.addEventListener('DOMContentLoaded', (event) => {
const load = document.getElementById('piecraft');
const server = document.getElementById('multiplayer-menu');
const multiplayer = document.getElementById('multiplayer');
const titlescreen = document.getElementById('titlescreen');
const profile = document.getElementById('profile');
const done = document.getElementById('done');

server.style.display = 'none';

multiplayer.style.display = 'none';

titlescreen.style.display = 'none';

profile.style.display = 'none';

setTimeout(function() {
  load.style.display = 'none';
  profile.style.display = 'block';
}, 2000);

done.addEventListener('click', function() {  
  titlescreen.style.display = 'block';
  multiplayer.style.display = 'block';
  profile.style.display = 'none';
  done.style.display = 'none';
});

multiplayer.addEventListener('click', function() {
  titlescreen.style.display = 'none';
  server.style.display = 'block';
 });
}); 

//have fun
