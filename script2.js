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

// Kontaktformular

function submitForm() {
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('success-message').style.display = 'block';
}


/*titel*/

document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.getElementById('slow-appear');
    h1.style.opacity = '1';
});