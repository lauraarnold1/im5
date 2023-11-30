
// Hamburger Menü
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    menu.classList.toggle('active');

    if (menu.classList.contains('active')) {
        document.body.style.overflowY = 'hidden'; // Verhindere das Scrollen, wenn das Menü aktiv ist
    } else {
        document.body.style.overflowY = 'auto'; // Erlaube das Scrollen, wenn das Menü nicht aktiv ist
    }
});

//Scroll to top
document.addEventListener("DOMContentLoaded", function () {
    var scrollToTopButton = document.querySelector(".scroll-to-top");

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

function zeigeErklaerungKonsens() {
    document.getElementById('popupTitel').innerText ='Erklärung für Konsens';
    document.getElementById('popupText').innerText = 'Konsens bedeutet die übereinstimmende Meinung von Personen zu einer bestimmten Frage ohne verdeckten oder offenen Widerspruch. Individuelle Grenzen werden respektiert: Nein heißt immer nein! Und noch wichtiger: Nur ja heißt ja!';
    document.getElementById('popup').style.display = 'block';
}

function schliessePopupKonsens() {
    document.getElementById('popup').style.display = 'none';
}

function zeigeErklaerungDefinitionsmacht() {
    document.getElementById('popupTitel').innerText ='Erklärung für Definitionsmacht';
    document.getElementById('popupText').innerText = 'Wo ein Übergriff beginnt, bestimmt immer die betroffene Person und sie hat das Recht zu entscheiden, wie es nach dem Vorfall weitergeht.';
    document.getElementById('popup').style.display = 'block';
}

function schliessePopupDefinitionsmacht() {
    document.getElementById('popup').style.display = 'none';
}

function zeigeErklaerungParteilichkeit() {
    document.getElementById('popupTitel').innerText ='Erklärung für Parteilichkeit';
    document.getElementById('popupText').innerText = 'Die Wahrnehmung der betroffenen Person wird nicht in Frage gestellt – Solidarität steht an erster Stelle.';
    document.getElementById('popup').style.display = 'block';
}

function schliessePopupParteilichkeit() {
    document.getElementById('popup').style.display = 'none';
}