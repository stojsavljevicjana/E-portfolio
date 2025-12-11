const cards = document.querySelectorAll('.card');

function revealCards() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){
      card.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealCards);
window.addEventListener('load', revealCards);

// Dropdown za telefone (klik)
document.querySelectorAll('.dropdown').forEach(drop => {
  const button = drop.querySelector('.dropbtn');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    drop.classList.toggle('show');
  });
});

// Zatvaranje dropdowna kada klikneš izvan njega
document.addEventListener('click', (e) => {
  document.querySelectorAll('.dropdown').forEach(drop => {
    if (!drop.contains(e.target)) {
      drop.classList.remove('show');
    }
  });
});
