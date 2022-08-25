const saison = document.querySelector('.saison');
const btnSaisons = document.querySelectorAll('.btn');
const saisonInfo = document.querySelector('.saison-info');

const saisonsInfo = {
    "automne": "L’automne démarre à l’équinoxe de septembre qui a lieu aux alentour du 21/23 septembre.",
    "hiver": "L’hiver commence au solstice d’hiver qui correspond au jour le plus court de l’année, le solstice d’hiver se produit autour du 21 décembre.",
    "printemps": "Le printemps commence avec l’équinoxe de printemps qui arrive autour du 21 mars.",
    "ete": "L’été débute avec le jour le plus long (ou la nuit la plus courte) qui correspond au solstice d’été qui se produit vers le 21/22 juin."
};

window.onload = function() {
   affiche('hiver');
}

function affiche(value) {
    saison.style.backgroundImage = `url(./images/${value}.jpeg)`;
    let btnActive = document.querySelector('.btn-active');
    if(btnActive) {
        btnActive.classList.remove('btn-active');
    }
    document.querySelector(`.${value}`).classList.add('btn-active');
    saisonInfo.textContent = saisonsInfo[value];
    saison.classList.add('saison-animation');
    setInterval(() => {
        saison.classList.remove('saison-animation');
    }, 3000);
}