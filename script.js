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

document.querySelectorAll('.dropdown').forEach(drop => {
  const button = drop.querySelector('.dropbtn');

  button.addEventListener('click', (e) => {
    e.preventDefault();
    drop.classList.toggle('show');
  });
});

document.addEventListener('click', (e) => {
  document.querySelectorAll('.dropdown').forEach(drop => {
    if (!drop.contains(e.target)) {
      drop.classList.remove('show');
    }
  });
});

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 100;

  reveals.forEach(reveal => {
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - revealPoint) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);


