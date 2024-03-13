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

// STYLING LIST
const list = document.querySelector('ul');
const firstItem = document.querySelector('ul li');
firstItem.classList.remove('active')

const fourthItem = document.createElement('li');
fourthItem.classList.add('active');
fourthItem.classList.add('list-group-item');
fourthItem.textContent = 'Quarto Item';
list.appendChild(fourthItem);

const fifthItem = document.createElement('li');
fifthItem.classList.add('list-group-item');
fifthItem.textContent = 'Quinto Item';
list.appendChild(fifthItem);


// STYLING MENU
const menu = document.querySelector('[role="group"]')
menu.classList.remove('btn-group-vertical')



