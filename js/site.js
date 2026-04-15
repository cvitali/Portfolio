// Sélection du Dark Mode
const radiobuttons = document.querySelectorAll('.js-dark-mode');

radiobuttons.forEach(radiobutton => {
    radiobutton.addEventListener('change', () => {
        if (radiobutton.id === 'darkMode__on') {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    })
})

// Sélection de la langue
const selectLanguage = document.querySelector('.js-selectLanguage');
let currentLanguage = loadLanguage('fr'); // langue par défaut
selectLanguage.addEventListener('click', () => {
    const selectedLanguage = selectLanguage.value;
    console.log('Selected language:', selectedLanguage);
    loadLanguage(selectedLanguage);
})

// fonction affichant le texte dans la langue choisie
async function loadLanguage(lang) {
    const response = await fetch(`../i18n/${lang}.json`);
    const translations = await response.json(); 
    document.querySelectorAll('[data-i18]').forEach(element => {
        const key = element.getAttribute('data-i18');   
        if (translations[key]) {
            element.innerHTML = translations[key]; 
        }
    });
}

//affichage du menu burger
const burger = document.querySelector('.js-burger')
burger.addEventListener('click', () => {
    const navItems = document.querySelectorAll('.js-navItems')
    navItems.forEach(item => {
        item.classList.toggle('js-navItems-hidden')
    })
})