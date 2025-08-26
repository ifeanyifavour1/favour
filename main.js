const menuicon = document.getElementById('menu-icon');
const Navmenu  = document.getElementById('Nav-menu');
const closeicon = document.getElementById('close-icon');
const Navlist  = document.querySelectorAll('.Nav-list');

menuicon.addEventListener('click', () => {
  Navmenu.classList.remove('hidden');
});

closeicon.addEventListener('click', () => {
  Navmenu.classList.add('hidden');
});

Navlist.forEach(link => {
  link.addEventListener('click', () => {
    Navmenu.classList.add('hidden');
  });
});
