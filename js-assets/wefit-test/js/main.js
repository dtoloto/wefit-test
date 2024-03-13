// STYLING HEADER
const jumbotron = document.querySelector('#jumbotron');
jumbotron.classList.add('text-right');
jumbotron.classList.add('bg-secondary');
jumbotron.classList.add('text-white');

const jumbotronBtn = document.querySelector('#jumbotron-btn');
jumbotronBtn.classList.remove('btn-primary');
jumbotronBtn.classList.add('btn-success');


// STYLING CARDS
const animalsCard = document.querySelector("#animals-card")
animalsCard.classList.add('order-2');
const animalsCardButton = animalsCard.getElementsByTagName('a')?.[0];
animalsCardButton.classList.remove('btn-primary');
animalsCardButton.classList.add('btn-success');
 
const techCard = document.querySelector("#tech-card")
techCard.classList.add('order-4');
 
const peopleCard = document.querySelector("#people-card")
peopleCard.classList.add('order-3');
 
const natureCard = document.querySelector("#nature-card")
natureCard.classList.add('order-1');